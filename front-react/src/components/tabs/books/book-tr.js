import { TRButtons } from '../../ui/tr-buttons';

export const BookTR = ({ book, onDelete, onEdit }) => {
  const { id, title, publisher, topics, authors, edition, year } = book

  return (
    <tr>
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
      <td><TRButtons {...{ onDelete, onEdit }} /></td>
    </tr>
  )
}