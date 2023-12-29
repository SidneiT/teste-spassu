import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteOne, getAll } from '../../services/authors';
import AuthorTR from './author-tr';

export default function Authors() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const fetchAuthors = () => {
    setLoadError(false)
    setLoading(true)

    getAll()
      .then(({ data }) => {
        setTopics(data)
      })
      .catch(() => {
        setLoadError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchAuthors()
  }, [])

  const handleDelete = (bookID) => {
    deleteOne({ bookID }).then(() => {
      fetchAuthors()
    })
  }

  const handleEdit = (bookID) => {
    // editing
  }

  return (
    <article>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>            
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {!loading && topics.length && 
            topics.map(book => <AuthorTR key={book.id} book={book} onDelete={handleDelete} onEdit={handleEdit} />)
          }
        </tbody>
      </Table>
      {loading && 'Loading...'}
      {loadError && 'Ocorreu um erro ao buscar os dados, por favor, atualize a página e tente novamente.'}
    </article>
  )
}
