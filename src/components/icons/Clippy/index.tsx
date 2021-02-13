import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void;
  className?: string;
}

const Container = styled.button`
  width: 5rem;
  height: 5rem;
  background-image: url("/images/clippy-chat.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border-width: 0;
`

const Clippy: React.FC<Props> = ({ className, onClick }) => (
  <Container className={className} onClick={onClick} />
)

export default Clippy
