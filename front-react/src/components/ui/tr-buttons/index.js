import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const TRButtons = ({ onEdit, onDelete }) => {
  return (
    <ButtonGroup size="sm">
      <Button onClick={onEdit}>Editar</Button>
      <Button variant="danger" onClick={onDelete}>Remover</Button>
    </ButtonGroup>
  )
}
