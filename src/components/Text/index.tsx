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

const P = ({ children, ...rest }: Props) => <Text {...rest}>{children}</Text>

export default P
