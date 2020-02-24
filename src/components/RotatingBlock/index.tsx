import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  position: absolute;
  top: 5rem;
  font-size: 2rem;
  font-weight: bold;
  opacity: 0;
`;

const Container = styled.div`
  min-height: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  position: relative;

  /* // This turns three images into a slide show. The math is as follows: 
  // (fade in time + display time + fade out time) x number of images = animation time
  // example: (1s fade in + 2s display + 1s fade out) x 3 images = 9s animation
  // each image is staggered by 1/numberOfImages (1/3 in the example)
  // I wish I could say I developed this myself. */

  /* // Fade in content for 1s, display for 2s, fade out for 1s */
  /* // Fades will overlap each other */
  @keyframes slide-show-animation {
    0%   { opacity: 0; }
    11.11%   { opacity: 1; } // 1 / 9 = 11.11%
    33.33%  { opacity: 1; } // 3 / 9 = 33.33%
    44.44%  { opacity: 0; } // 4 / 9 = 44.44%
    100% { opacity: 0; }
  }

  @keyframes rotate-up {
    0% {
      opacity: 0;
      top: 2rem;
    }
  
    15% {
      opacity: 1;
      top: 0;
    }

    50% {
      opacity: 1;
      top: 0;
    }

    85% {
      opacity: 1;
      top: -2rem;
    }

    100% {
      top: -2rem;
      opacity: 0;
    }
  }

  ${P} {
    :nth-of-type(1) {
      animation: rotate-up 5s infinite;
      animation-delay: -10s;
    }

    :nth-of-type(2) {
      animation: rotate-up 5s infinite;
      animation-delay: -5s;
    }

    :nth-of-type(3) {
      animation: rotate-up 5s infinite;
      animation-delay: -0;
    }
  }
`;

const RotatingBlock = () => (
  <Container>
    <P>Software Developer</P>
    <P>Full Stack Engineer</P>
    <P>JavaScript + React</P>
  </Container>
);

export default RotatingBlock;
