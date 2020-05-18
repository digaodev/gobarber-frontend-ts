import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignUpBg from '../../assets/sign-up-background.png';

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
`;

export const Background = styled.div`
  flex: 1;

  background: url(${SignUpBg}) no-repeat center;
  background-size: cover;
`;

const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${slideFromRight} 1s;

  form {
    margin: 32px 0;
    text-align: center;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }
  } /* end-form */

  > a {
    display: flex;
    align-items: center;

    color: #f4ede8;
    margin-top: 24px;
    text-decoration: none;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
