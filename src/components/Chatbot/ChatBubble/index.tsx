import React from 'react'
import styled from 'styled-components'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'

import P from 'components/Text'

interface Props extends MotionProps {
  delayFactor: number;
  children: React.ReactNode;
  className?: string;
  initial: boolean;
  justify?: 'flex-start' | 'flex-end';
}

const StyledP = styled(P)`
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: inline-block;
`

const Container = styled<any>(motion.div)`
  display: flex;
  width: 100%;
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
    }
  },
  exit: {}
})

const ChatBubble: React.FC<Props> = ({
  children,
  className,
  delayFactor = 0,
  initial,
  justify = 'flex-start',
  ...rest
}) => (
  <AnimatePresence initial={initial}>
    <Container
      className={className}
      justify={justify}
      {...animation(delayFactor)}
      {...rest}
    >
      <StyledP>{children}</StyledP>
    </Container>
  </AnimatePresence>
)

export default ChatBubble
