import { useAlertContext } from '../../../context/alert';
import { AlertContainer, AlertMessage } from './styles';

export const Alert = () => {
  const { type, message, show } = useAlertContext()

  return (
    <AlertContainer>
      <AlertMessage show={show} variant={type}>{message}</AlertMessage>
    </AlertContainer>
  )
}
