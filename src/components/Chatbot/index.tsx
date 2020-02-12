import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Clippy from '../icons/Clippy'
import ChatSection from './ChatSection'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

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

const Chatbot: React.FC<Props> = ({
  isOpen,
  closeChat,
  openChat,
  hideChat,
  setHideChat
}) => {
  const [userMessages, setUserMessages] = useState([] as string[])
  const [chatValue, setChatValue] = useState('')

  const submitMessage = (e: any) => {
    const { value } = e.currentTarget

    if (e.key === 'Enter') {
      setUserMessages([ ...userMessages, value ])
      setChatValue('')
    }
  }

  if (hideChat) return null;
  return (
    <AnimatePresence>
      {isOpen ?
        <Container
          key='chat'
          positionTransition
          initial={{
            opacity: 0,
            y: 400
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75 }
          }}
          exit={{
            opacity: 0,
            y: 400,
            transition: { duration: 0.5 }
          }}
        >
          <ChatHeader closeChat={closeChat} />
          <ChatSection
            closeChat={closeChat}
            hideChat={setHideChat}
            userMessages={userMessages}
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
