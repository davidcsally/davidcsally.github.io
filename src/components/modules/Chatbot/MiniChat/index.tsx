import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import Chat from 'components/icons/Chat'

interface Props {
  className?: string
  onClick: () => void
}

const StyledChat = styled(Chat)`
  height: 85%;
  width: 85%;
`

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 6px;
  border-width: 0;
  background-color: var(--chat-primary);
`

const animation = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
}

const MiniChat = ({ className, onClick }: Props) => (
  <Button
    className={className}
    onClick={onClick}
    aria-label="Open Chat"
    type="button"
    tabIndex={0}
    {...animation}
  >
    <StyledChat />
  </Button>
)

export default MiniChat
