import React from 'react';
import styled from 'styled-components';

import logo from './logo.png';

const Img = styled.img`
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(18px);
    }
    100% {
      transform: translateY(-2px);
    }
  }

  width: 80%;
  max-width: 10rem;
  height: auto;
  animation: 1500ms bounce infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }
`;

export const ReactSight: React.FC<any> = ({ className }) => (
  <Img className={className} src={logo} alt="Bio-Rad Laboratories" />
);
