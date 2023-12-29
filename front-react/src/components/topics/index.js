import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteOne, getAll } from '../../services/topics';
import TopicTR from './topic-tr';

export default function Topics() {
  const [topics, setTopics] = useState([])
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

  const handleDelete = (topicID) => {
    deleteOne({ topicID }).then(() => {
      fetchTopics()
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
            topics.map(topic => <TopicTR key={topic.id} topic={topic} onDelete={handleDelete} onEdit={handleEdit} />)
          }
        </tbody>
      </Table>
      {loading && 'Loading...'}
      {loadError && 'Ocorreu um erro ao buscar os dados, por favor, atualize a página e tente novamente.'}
    </article>
  )
}
