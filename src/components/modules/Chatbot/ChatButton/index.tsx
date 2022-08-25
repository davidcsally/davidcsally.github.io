import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

import type { ReactNode } from 'react'
import type { MotionProps } from 'framer-motion'

interface Props extends MotionProps {
  delay: number
  onClick: () => void
  children: ReactNode
  className?: string
  justify?: 'flex-start' | 'flex-end'
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
`

const Container = styled.div<{ justify: string }>`
  display: flex;
  margin-bottom: 1rem;
  justify-content: ${({ justify }) => justify};
`

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
})

const ChatButton = ({
  delay = 0,
  className,
  children,
  onClick,
  justify = 'flex-start',
  initial,
  ...rest
}: Props) => (
  <AnimatePresence initial={!!initial}>
    <Container className={className} justify={justify}>
      <Button onClick={onClick} {...rest} {...animation(delay)}>
        {children}
      </Button>
    </Container>
  </AnimatePresence>
)

export default ChatButton
