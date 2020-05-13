import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border: 0;
  border-radius: 10px;
  color: #312e38;
  font-weight: 500;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  width: 100%;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
