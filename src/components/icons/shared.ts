import styled from 'styled-components';

export const Path = styled.path`
  transition: fill 150ms linear;
  fill: white;
`;

export const SVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;

export const Container = styled.a`
  background-color: transparent;

  :hover {
    ${Path} {
      fill: black;
    }
  }
`;