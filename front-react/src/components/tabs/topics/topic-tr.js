import { TRButtons } from '../../ui/tr-buttons';

export const TopicTR = ({ topic, onDelete, onEdit }) => {
  const { id, description } = topic

  return <tr>
    <td>{id}</td>
    <td>{description}</td>
    <td><TRButtons {...{ onDelete, onEdit }} /></td>
  </tr>
}