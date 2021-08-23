import styled from 'styled-components'

import type { ReactNode } from 'react'

const Square = styled.div<{ max?: string }>`
  display: grid;
  margin: 0 auto;
  width: 100%;
  ${({ max }) => max && `max-height: ${max}; max-width: ${max};`}
`

const Svg = styled.svg`
  grid-area: 1 / 1;
`

const Container = styled.div`
  grid-area: 1 / 1;
`

interface Props {
  children: ReactNode
  max?: string
}

/* TODO: use aspect-ratio when it gets support: `aspect-ratio: 1 / 1;` */
const SquareRatio = ({ children, max }: Props) => (
  <Square max={max}>
    <Svg viewBox="0 0 1 1" />
    <Container>{children}</Container>
  </Square>
)

export default SquareRatio
