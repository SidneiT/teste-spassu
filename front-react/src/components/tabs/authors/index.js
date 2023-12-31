import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useAuthorsContext } from '../../../context/authors';
import { useModalContext } from '../../../context/modal';
import { deleteOne, getAll } from '../../../services/authors';
import { AuthorForm } from '../../forms/author-form';
import { TabContent } from '../styles';
import { AuthorTR } from './author-tr';

export const Authors = () => {
  const { openModal, closeModal } = useModalContext();
  const { authors, setAuthors } = useAuthorsContext()

  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const fetchAuthors = () => {
    setLoadError(false)
    setLoading(true)

    getAll()
      .then(({ data }) => {
        setAuthors(data)
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

  const handleDelete = ({ id }) => {
    deleteOne(id).then(() => {
      fetchAuthors()
    })
  }

  const handleEdit = (author) => {
    openModal({
      title: "Atualizar Autor",
      content: <AuthorForm editData={author} onSaved={() => { fetchAuthors(); closeModal() }} onCancel={closeModal} />
    })
  }

  const handleCreate = () => {
    openModal({
      title: "Novo Autor",
      content: <AuthorForm onSaved={() => { fetchAuthors(); closeModal() }} onCancel={closeModal} />
    })
  }

  return (
    <TabContent>
      <Button onClick={handleCreate} size="sm" >Adicionar</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {!loading && authors.length &&
            authors.map(author => (
              <AuthorTR
                key={author.id}
                author={author}
                onDelete={_ => handleDelete(author)}
                onEdit={_ => handleEdit(author)}
              />
            ))
          }
        </tbody>
      </Table>
      {loading && 'Loading...'}
      {loadError && 'Ocorreu um erro ao buscar os dados, por favor, atualize a página e tente novamente.'}
    </TabContent>
  )
}
