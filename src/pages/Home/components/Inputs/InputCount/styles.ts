import styled from 'styled-components';

export const InputCountContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;
  width: 100px;
  height: 32px;
  background: ${(props) => props.theme.main};
  border-radius: 8px;

  button {
    cursor: pointer;
    color: ${(props) => props.theme.textDark};
  }

  input {
    width: 2rem;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;

    -moz-appearance: textfield;
    appearance: textfield;
    -webkit-appearance: none;
  }
`;
