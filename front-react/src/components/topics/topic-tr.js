import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function TopicTR({ topic, onDelete, onEdit }) {
  const { id, description } = topic


  return <tr>
    <td>{id}</td>
    <td>{description}</td>
    <td>
      <ButtonGroup size="sm">
        <Button onClick={() => onEdit(id)}>Editar</Button>
        <Button variant="danger" onClick={() => onDelete(id)}>Remover</Button>
      </ButtonGroup>
    </td>
  </tr>
}