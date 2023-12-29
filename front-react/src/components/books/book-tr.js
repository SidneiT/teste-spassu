import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function BookTR({ book, onDelete, onEdit }) {
  const { id, title, publisher, topics, authors, edition, year } = book


  return <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{publisher}</td>
    <td>
      {!topics?.length && '-'}
      <ul>
        {topics?.map(({ description, id }) => <li key={id}>{description}</li>)}
      </ul>
    </td>
    <td>
      {!authors?.length && '-'}
      <ul>
        {authors?.map(({ name, id }) => <li key={id}>{name}</li>)}
      </ul>
    </td>
    <td>{edition}</td>
    <td>{year}</td>
    <td>
      <ButtonGroup size="sm">
        <Button onClick={() => onEdit(id)}>Editar</Button>
        <Button variant="danger" onClick={() => onDelete(id)}>Remover</Button>
      </ButtonGroup>
    </td>
  </tr>
}