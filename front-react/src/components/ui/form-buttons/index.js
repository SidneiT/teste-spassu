import Button from 'react-bootstrap/Button';

import { ButtonGroup } from './styles';

export const FormButtons = ({ onCancel }) => {
  return (
    <ButtonGroup>
      <Button onClick={onCancel} variant="secondary">Cancelar</Button>
      <Button type="submit" variant="primary">Salvar</Button>
    </ButtonGroup>
  )
}
