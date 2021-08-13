import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import type { ReactNode } from 'react'
import type { MotionProps } from 'framer-motion'

import P from 'components/Text'

interface ContainerProps {
  justify?: 'flex-start' | 'flex-end';
}

interface ComponentProps extends ContainerProps {
  delay: number;
  children: ReactNode;
  className?: string;
}

type Props = MotionProps & ComponentProps;

const StyledP = styled(P)`
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-block;
`

const Container = styled<{ justify: string }>(motion.div)`
  display: flex;
  width: 100%;
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

const ChatBubble = ({
  children,
  className,
  initial,
  delay = 0,
  justify = 'flex-start',
  ...rest
}: Props) => (
  <AnimatePresence initial={!!initial}>
    <Container
      className={className}
      justify={justify}
      {...rest}
      {...animation(delay)}
    >
      <StyledP>{children}</StyledP>
    </Container>
  </AnimatePresence>
)

export default ChatBubble
