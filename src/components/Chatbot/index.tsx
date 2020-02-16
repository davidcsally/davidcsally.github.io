import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Clippy from 'components/icons/Clippy'
import ChatSection from './ChatSection'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

import { ChatMessage } from './types'
import { _messages } from './data'

interface Props {
  isOpen: boolean;
  hideChat: boolean;
  closeChat: () => void;
  openChat: () => void;
  setHideChat: () => void;
}

const StyledClippy = styled(Clippy)`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
`

const Container = styled(motion.div)`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  bottom: 1rem;
  right: 1rem;
  height: 100%;
  width: 100%;
  max-height: 32rem;
  max-width: 300px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  transform: translateZ(0);
`

const animation = {
  initial: {
    opacity: 0,
    y: 400
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: { duration: 0.5 },
  },
}

const Chatbot: React.FC<Props> = ({
  isOpen,
  closeChat,
  openChat,
  hideChat,
  setHideChat
}) => {
  const [messages, setMessages] = useState(_messages)
  const [userMessages, setUserMessages] = useState([] as ChatMessage[])
  const [chatValue, setChatValue] = useState('')

  const submitMessage = (e: any) => {
    const { value } = e.currentTarget

    if (e.key === 'Enter') {
      const newMessage = {
        message: value,
        isSender: true,
        initial: true,
      }

      setUserMessages([...userMessages, newMessage])
      setChatValue('')
    }
  }

  if (hideChat) return null;
  return (
    <AnimatePresence>
      {isOpen ?
        <Container
          key='chat'
          {...animation}
        >
          <ChatHeader closeChat={closeChat} />
          <ChatSection
            closeChat={closeChat}
            hideChat={setHideChat}
            userMessages={userMessages}
            messages={messages}
          />
          <ChatFooter
            chatValue={chatValue}
            submitMessage={submitMessage}
            setChatValue={setChatValue}
          />
        </Container> :
        <StyledClippy onClick={openChat} />
      }
    </AnimatePresence>
  )
}

export default Chatbot
