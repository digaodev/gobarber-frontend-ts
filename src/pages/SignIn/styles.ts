import styled from 'styled-components';
import { shade } from 'polished';

import SignInBg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 700px;
  width: 100%;

  form {
    margin: 32px 0;
    text-align: center;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: block;

      color: #f4ede8;
      margin-top: 24px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  } /* end-form */

  > a {
    display: flex;
    align-items: center;

    color: #ff9000;
    margin-top: 24px;
    text-decoration: none;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${SignInBg}) no-repeat center;
  background-size: cover;
`;
