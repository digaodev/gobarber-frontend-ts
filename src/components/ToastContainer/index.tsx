import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: {
        right: '-120%',
        opacity: '0%',
      },
      enter: {
        right: '0%',
        opacity: '100%',
      },
      leave: {
        right: '-120%',
        opacity: '0%',
      },
    },
  );

  return (
    <Container>
      {messageWithTransitions &&
        messageWithTransitions.map(({ item, key, props }) => (
          <Toast style={props} key={key} message={item} />
        ))}
    </Container>
  );
};

export default ToastContainer;
