import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useAlertContext } from '../../../context/alert';
import { createOrUpdate } from '../../../services/topics';
import { FormButtons } from '../../ui/form-buttons';

const defaultData = {
  description: ''
}

export const TopicForm = ({ onSaved, onCancel, editData = defaultData }) => {
  const { showMessage } = useAlertContext()
  const [formDisabled, setFormDisabled] = useState(false)
  const [formData, setFormData] = useState(editData);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDisabled(true)
    createOrUpdate(formData)
      .then(() => {
        showMessage('Assunto adicionado!', 'success')
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
          <FloatingLabel label="Descrição" className="mb-3">
            <Form.Control
              type="text"
              name="description"
              required
              min={1}
              max={40}
              onChange={handleChange}
              defaultValue={formData.description} />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <FormButtons onCancel={cancelHandle} />
      </Row>
    </Form>
  )
}
