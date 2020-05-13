import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  color: #8e8c9a;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;

    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #8e8c9a;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
