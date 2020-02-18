import React from 'react';
import styled from 'styled-components';
import { motion, MotionProps } from 'framer-motion';

interface Props extends MotionProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  justify?: 'flex-start' | 'flex-end';
}


const Button = styled(motion.button)`
  border-radius: 20px;
  border: 2px solid var(--system-red);
  padding: 0.5rem 1rem;
  display: inline-block;
  color: var(--system-red);
  background-color: var(--white);
  transition: all 150ms linear;

  &:focus,
  &:hover {
    color: white;
    background-color: var(--system-red);
  }
`;

const Container = styled.div<any>`
  display: flex;
  margin-bottom: 1rem;
  justify-content: ${({ justify }) => justify};
`;

const ChatButton: React.FC<Props> = ({
  className,
  children,
  onClick,
  justify = 'flex-start',
  ...rest
}) => (
  <Container className={className} justify={justify}>
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  </Container>
);

export default ChatButton;
