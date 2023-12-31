import { styled } from "styled-components";


export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;

  button {
    min-width: 150px;

    &:first-of-type {
      margin-right: 10px;
    }    
  }
`