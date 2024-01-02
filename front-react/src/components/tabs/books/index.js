import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useAuthorsContext } from '../../../context/authors';
import { useBooksContext } from '../../../context/books';
import { useModalContext } from '../../../context/modal';
import { useTopicsContext } from '../../../context/topics';
import { deleteOne, getAll } from '../../../services/books';
import { BookForm } from '../../forms/book-form';
import { TabContent } from '../styles';
import { BookTR } from './book-tr';


export const Books = () => {
  const { openModal, closeModal } = useModalContext();
  const { books, setBooks } = useBooksContext()
  const { topics } = useTopicsContext()
  const { authors } = useAuthorsContext()

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
  }, [topics, authors])

  const handleDelete = ({ id }) => {
    deleteOne(id).then(() => {
      fetchBooks()
    })
  }

  const handleEdit = (book) => {
    openModal({
      title: "Atualizar Livro",
      content: <BookForm editData={book} onSaved={() => { fetchBooks(); closeModal() }} onCancel={closeModal} />
    })
  }

  const handleCreate = () => {
    openModal({
      title: "Novo Livro",
      content: <BookForm onSaved={() => { fetchBooks(); closeModal() }} onCancel={closeModal} />
    })
  }

  return (
    <TabContent>
      <Button onClick={handleCreate} size="sm" >Adicionar</Button>
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
          {
            books.map(book => (
              <BookTR
                key={book.id}
                book={book}
                onDelete={_ => handleDelete(book)}
                onEdit={_ => handleEdit(book)}
              />
            ))
          }
        </tbody>
      </Table>
      {!books.length && 'Sem dados para exibir.'}
      {loading && 'Loading...'}
      {loadError && 'Ocorreu um erro ao buscar os dados, por favor, atualize a página e tente novamente.'}
    </TabContent>
  )
}
