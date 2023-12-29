import React, { useEffect, useState } from 'react'
import { deleteOne, getAll } from '../../services/books'
import Table from 'react-bootstrap/Table';
import BookTR from './book-tr';
import BookForm from '../book-form';


export default function Books() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const fetchBooks = () => {
    setLoadError(false)
    setLoading(true)

    getAll()
      .then(({ data }) => {
        setBooks(data)
      })
      .catch(() => {
        setLoadError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleDelete = (bookID) => {
    deleteOne({ bookID }).then(() => {
      fetchBooks()
    })
  }

  const handleEdit = (bookID) => {
    // editing
  }

  return (
    <article>
      <BookForm onCreated={fetchBooks}/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Assunto</th>
            <th>Autor</th>
            <th>Edição</th>
            <th>Ano de Publicação</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {!loading && books.length && 
            books.map(book => <BookTR key={book.id} book={book} onDelete={handleDelete} onEdit={handleEdit} />)
          }
        </tbody>
      </Table>
      {loading && 'Loading...'}
      {loadError && 'Ocorreu um erro ao buscar os dados, por favor, atualize a página e tente novamente.'}
    </article>
  )
}
