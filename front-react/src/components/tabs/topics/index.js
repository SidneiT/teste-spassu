import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useModalContext } from '../../../context/modal';
import { useTopicsContext } from '../../../context/topics';
import { deleteOne, getAll } from '../../../services/topics';
import { TopicForm } from '../../forms/topic-form';
import { TabContent } from '../styles';
import { TopicTR } from './topic-tr';


export const Topics = () => {
  const { openModal, closeModal } = useModalContext();
  const { topics, setTopics } = useTopicsContext()
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const fetchTopics = () => {
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
    fetchTopics()
  }, [])

  const handleDelete = ({ id }) => {
    deleteOne(id).then(() => {
      fetchTopics()
    })
  }

  const handleEdit = (author) => {
    openModal({
      title: "Atualizar Assunto",
      content: <TopicForm editData={author} onSaved={() => { fetchTopics(); closeModal() }} onCancel={closeModal} />
    })
  }

  const handleCreate = () => {
    openModal({
      title: "Novo Assunto",
      content: <TopicForm onSaved={() => { fetchTopics(); closeModal() }} onCancel={closeModal} />
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
          {!loading && topics.length &&
            topics.map(topic => (
              <TopicTR
                key={topic.id}
                topic={topic}
                onDelete={_ => handleDelete(topic)}
                onEdit={_ => handleEdit(topic)}
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
