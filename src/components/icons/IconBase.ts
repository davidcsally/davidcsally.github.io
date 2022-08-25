import styled from '@emotion/styled'

export const Path = styled.path`
  transition: fill 150ms linear;
  fill: white;
`

export const SVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`

export const Container = styled.a`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;

  :hover {
    ${Path} {
      fill: black;
    }
  }
`
