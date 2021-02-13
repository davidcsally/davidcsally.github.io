import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { media } from 'styles/media'

import MiniChat from './MiniChat'
import ChatSection from './ChatSection'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

import { initialState } from './mock'

import {
  chatReducer,
  MOVE_NEW_TO_SAVED,
  ADD_MESSAGE,
} from './reducer'

interface Props {
  isOpen: boolean;
  closeChat: () => void;
  openChat: () => void;
}

const StyledMiniChat = styled(MiniChat)`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
`

const Container = styled(motion.div)`
  bottom: 0rem;
  right: 0.25rem;
  left: 0.25rem;

  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  transform: translateZ(0);

  ${media.small`
    bottom: 1rem;
    left: auto;
    right: 1rem;
    width: 100%;
    max-height: 32rem;
    max-width: 400px;
  `}
`

const animation = {
  initial: {
    opacity: 0,
    x: 400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: 400,
    transition: {
      duration: 0.4,
    },
  },
}

const Chatbot: React.FC<Props> = ({
  isOpen,
  closeChat,
  openChat,
}) => {
  const [chatMessages, updateMessages] = useReducer(chatReducer, initialState)
  const [chatValue, setChatValue] = useState('')

  const submitMessage = (e: any) => {
    const { value } = e.currentTarget

    if (e.key === 'Enter') {
      updateMessages({ type: ADD_MESSAGE, payload: value })
      setChatValue('')
    }
  }

  const onClose = () => {
    updateMessages({ type: MOVE_NEW_TO_SAVED })
    closeChat()
  }

  return (
    <AnimatePresence>
      {isOpen
        ? (
          <Container
            key="chat"
            layout
            {...animation}
          >
            <ChatHeader closeChat={onClose} />
            <ChatSection
              closeChat={onClose}
              savedMessages={chatMessages.savedMessages}
              newMessages={chatMessages.newMessages}
              updateMessages={updateMessages}
            />
            <ChatFooter
              chatValue={chatValue}
              submitMessage={submitMessage}
              setChatValue={setChatValue}
            />
          </Container>
        )
        : <StyledMiniChat onClick={openChat} />}
    </AnimatePresence>
  )
}

export default Chatbot
