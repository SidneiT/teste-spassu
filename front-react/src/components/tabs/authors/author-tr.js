import { TRButtons } from "../../ui/tr-buttons"

export const AuthorTR = ({ author, onDelete, onEdit }) => {
  const { id, name } = author

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td><TRButtons {...{ onDelete, onEdit }} /></td>
    </tr>
  )
}