import React from 'react';
import styled from 'styled-components/macro';
import { motion, MotionProps, AnimatePresence } from 'framer-motion';

interface Props extends MotionProps {
  delay: number;
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

const animation = (delay: number) => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
    },
  },
  exit: {},
});

const ChatButton: React.FC<Props> = ({
  delay = 0,
  className,
  children,
  onClick,
  justify = 'flex-start',
  initial,
  ...rest
}) => (
  <AnimatePresence initial={!!initial}>
    <Container
      className={className}
      justify={justify}
    >
      <Button onClick={onClick} {...rest} {...animation(delay)}>
        {children}
      </Button>
    </Container>
  </AnimatePresence>
);

export default ChatButton;
