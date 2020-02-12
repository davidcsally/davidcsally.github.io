import React from 'react'
import styled from 'styled-components'
import { motion, MotionProps } from 'framer-motion'

interface Props extends MotionProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}


const Button = styled(motion.button)`
  border-radius: 20px;
  border: 2px solid var(--system-red);
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--system-red);
  transition: all 150ms linear;

  &:focus,
  &:hover {
    color: white;
    background-color: var(--system-red);
  }
`

const Container = styled.div`
  align-self: flex-end;
`

const ChatButton: React.FC<Props> = ({ className, children, onClick, ...rest }) => (
  <Container className={className}>
    <Button onClick={onClick} {...rest} >
      {children}
    </Button>
  </Container>
)

export default ChatButton
