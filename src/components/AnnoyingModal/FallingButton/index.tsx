import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import { fallingOver } from 'styles/animations'


interface FallingProps {
  hasAnimated: boolean;
}

interface Props {
  closeModal: () => void;
}

const Button = styled.button`
  font-family: 'Inter';
  border: 2px solid #0C0032;
  width: 15rem;
  min-height: 3.125rem;
  font-variation-settings: 'wght' 600, 'slnt' 0;
  will-change: font-variation-settings, background-color, transform;
  transition:
    font-variation-settings 250ms linear,
    background-color 250ms linear,
    outline-width 100ms linear,
    transform 250ms ease-in-out 500ms;
`;

// const Falling = styled.div<FallingProps>`
//   margin-top: 1.5rem;
//   margin-bottom: 15rem;

//   ${({ hasAnimated }) => {
//     console.log('hasAnimated', hasAnimated)

//     return hasAnimated && css`
//       animation-name: ${fallingOver};
//       animation-duration: 3s;
//       animation-delay: 750ms;
//       animation-timing-function: ease-in-out;
//       animation-iteration-count: 1;
//       animation-play-state: running;
//       animation-fill-mode: forwards;
//   `}}

//   &:focus,
//   &:hover {
//     ${Button} {
//       font-variation-settings: 'wght' 600, 'slnt' -10;
//       background-color: #240090;
//       color: white;
//     }
//   }
// `

export const FallingButton: React.FC<Props> = ({ closeModal }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
  // <Falling
  //   hasAnimated={hasAnimated}
  //   role='button'
  //   tabIndex={0}
  //   onKeyDown={() => {}}
  // >
    <Button
      onMouseOver={() => setHasAnimated(true)}
      onClick={closeModal}
    >
      Enter
    </Button>
  // </Falling>
  );
};
