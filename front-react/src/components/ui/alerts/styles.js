import Alert from 'react-bootstrap/Alert';
import { styled } from 'styled-components';

export const AlertContainer = styled.div`
  position: fixed;
  top: 40px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const AlertMessage = styled(Alert)`
  min-width: 250px;
  box-shadow: 0 0 8px 1px #0000002e;
`