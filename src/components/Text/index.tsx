import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
}

const Text = styled.p<Props>`
  font-family: 'Inter', 'Comic Sans MS';
  font-size: ${({ fontSize = '1rem' }) => fontSize};
  margin: 0;
`

const P: React.FC<Props> = ({ children, ...rest}) => <Text {...rest}>{children}</Text>

export default P
