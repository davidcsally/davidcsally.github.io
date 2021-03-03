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

const Clippy = ({ className, onClick }: Props) => (
  <Container className={className} onClick={onClick} />
)

export default Clippy
