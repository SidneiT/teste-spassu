import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useAlertContext } from '../../../context/alert';
import { useAuthorsContext } from '../../../context/authors';
import { useTopicsContext } from '../../../context/topics';
import { createOrUpdate } from '../../../services/books';
import { FormButtons } from '../../ui/form-buttons';

const defaultData = {
  title: '',
  publisher: '',
  edition: '',
  year: '',
  topics: [],
  authors: [],
}

export const BookForm = ({ onSaved, onCancel, editData = defaultData }) => {
  const { showMessage } = useAlertContext()
  const { authors } = useAuthorsContext()
  const { topics } = useTopicsContext()
  const [formDisabled, setFormDisabled] = useState(false)
  const [formData, setFormData] = useState(editData);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (['authors', 'topics'].includes(name)) {
      const options = e.target.selectedOptions;
      value = Array.from(options, option => parseInt(option.value));
    }

    setFormData((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormDisabled(true)

    createOrUpdate(formData)
      .then(() => {
        showMessage('Livro adicionado!', 'success')
      })
      .catch((e) => {
        showMessage('Erro ao salvar, tente novamente!', 'danger')
      })
      .finally(() => {
        onSaved()
        setFormData(defaultData);
        setFormDisabled(false)
      })
  };

  const cancelHandle = () => {
    setFormData(defaultData);
    onCancel && onCancel()
  }

  return (
    <Form onSubmit={handleSubmit} disabled={formDisabled}>
      <Row>
        <Col>
          <FloatingLabel label="Título" className="mb-3">
            <Form.Control
              type="text"
              name="title"
              required
              min={1}
              max={40}
              placeholder="Título"
              onChange={handleChange}
              value={formData.title} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Editora" className="mb-3">
            <Form.Control
              type="text"
              name="publisher"
              required
              min={1}
              max={40}
              placeholder="Editora"
              onChange={handleChange}
              value={formData.publisher} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel label="Edição" className="mb-3">
            <Form.Control
              type="number"
              name="edition"
              pattern="[0-9]{2}"
              required
              placeholder="Edição"
              onChange={handleChange}
              value={formData.edition} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Ano de Publicação" className="mb-3">
            <Form.Control
              type="number"
              min={1500}
              max={(new Date()).getFullYear()}
              name="year"
              pattern="[0-9]{4}"
              required
              placeholder="Ano de Publicação"
              onChange={handleChange}
              value={formData.year} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Assunto</Form.Label>
            <Form.Select
              defaultValue={editData.topics[0]?.id}
              onChange={handleChange}
              name="topics"
              required
            >
              <option value="" disabled selected>Selecione</option>
              {topics.map(({ id, description }) => <option key={id} value={id}>{description}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Autores</Form.Label>
            <Form.Select
              defaultValue={editData.authors[0]?.id}
              onChange={handleChange}
              name="authors"
              required
            >
              <option value="" disabled selected>Selecione</option>
              {authors.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <FormButtons onCancel={cancelHandle} />
      </Row>
    </Form>
  )
}
