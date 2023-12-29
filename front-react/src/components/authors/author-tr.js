import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function AuthorTR({ book, onDelete, onEdit }) {
  const { id, name } = book


  return <tr className="book-row">
    <td>{id}</td>
    <td>{name}</td>
    <td>
      <ButtonGroup size="sm">
        <Button onClick={() => onEdit(id)}>Editar</Button>
        <Button variant="danger" onClick={() => onDelete(id)}>Remover</Button>
      </ButtonGroup>
    </td>
  </tr>
}