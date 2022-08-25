import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'

import type { ReactNode } from 'react'
import type { MotionProps } from 'framer-motion'

import Text from 'components/shared/Text'
import Margin from 'components/shared/Margin'

interface ContainerProps {
  justify?: 'flex-start' | 'flex-end'
}

interface ComponentProps extends ContainerProps {
  delay: number
  children: ReactNode
  className?: string
}

type Props = MotionProps & ComponentProps

const StyledP = styled(Text)`
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-block;
`

const Container = styled(motion.div)<ContainerProps>`
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
    },
  },
  exit: {},
})

const ChatBubble = ({
  children,
  className,
  initial,
  delay,
  justify = 'flex-start',
  ...rest
}: Props) => (
  <AnimatePresence initial={!!initial}>
    <Margin mb="1rem">
      <Container
        className={className}
        justify={justify}
        {...rest}
        {...animation(delay)}
      >
        <StyledP>{children}</StyledP>
      </Container>
    </Margin>
  </AnimatePresence>
)

export default ChatBubble
