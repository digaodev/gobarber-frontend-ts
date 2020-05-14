import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    background: #ff9000;
    border-radius: 4px;
    color: #312e38;
    font-weight: 500;
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    width: 160px;

    transition: all 0.3s;

    &::before {
      position: absolute;
      content: '';
      left: 50%;
      transform: translateX(-50%);
      top: 100%;

      border-color: #ff9000 transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
    }
  } /* end-span */

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
