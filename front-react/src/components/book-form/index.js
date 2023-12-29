import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { create } from '../../services/books';

export default function BookForm({ onCreated }) {

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    publisher: '',
    edition: '',
    year: '',
    topic: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonDisabled(true)

    create(formData)
      .then(() => {
        onCreated && onCreated()
        setFormData({
          title: '',
          publisher: '',
          edition: '',
          year: '',
          topic: '',
          author: ''
        });
      })
      .catch(() => alert('Erro ao salvar, tente novamente!'))
      .finally(() => {
        setButtonDisabled(false)
      })
  };



  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <FloatingLabel label="Título" className="mb-3">
            <Form.Control
              type="text"
              name="title"
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
              placeholder="Edição"
              onChange={handleChange}
              value={formData.edition} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Ano de Publicação" className="mb-3">
            <Form.Control
              type="number"
              name="year"
              placeholder="Ano de Publicação"
              onChange={handleChange}
              value={formData.year} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel label="Assunto" className="mb-3">
            <Form.Control
              type="text"
              name="topic"
              placeholder="Assunto"
              onChange={handleChange}
              value={formData.topic} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Autor" className="mb-3">
            <Form.Control
              type="text"
              name="author"
              placeholder="Autor"
              onChange={handleChange}
              value={formData.author} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col><Button
          type="submit" className="float-right" disabled={buttonDisabled}>Salvar</Button></Col>
      </Row>
      <hr className='mb-5 mt-5' />
    </Form>
  )
}
