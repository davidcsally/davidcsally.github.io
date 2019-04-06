import styled from 'styled-components';

export const Path = styled.path`
  fill: white;
`;

export const SVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: transparent;

  :hover {
    ${Path} {
      fill: black;
    }
  }
`;