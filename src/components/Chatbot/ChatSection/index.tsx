import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAnimation, AnimatePresence } from 'framer-motion'

import ChatBubble from '../ChatBubble'
import ChatButton from '../ChatButton'
import { ChatMessage } from '../types'

interface Props {
  closeChat: () => void;
  hideChat: () => void;
  userMessages: ChatMessage[];
  messages: ChatMessage[];
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem;
  flex-grow: 1;
  overflow-y: auto;
  transform: translateZ(0);
`

const animation = (length: number) => ({
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: length * 1 + 2 }
  },
  exit: {},
})

const ChatSection: React.FC<Props> = ({ closeChat, hideChat, userMessages, messages }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }))
  })

  return (
    <Container id='messages-container'>
      {messages.map(({ initial, message }, index) => (
        <ChatBubble
          key={message}
          delayFactor={index + 1}
          initial={initial}
        >
          {message}
        </ChatBubble>
      ))}

      <AnimatePresence>
        <ChatButton
          key='please-stop'
          onClick={closeChat}
          onAnimationComplete={() => {
            const el = document.getElementById('messages-container')
            el!.scrollBy(1000, 1000)
          }}
          {...animation(messages.length)}
        >
          Bye <span role='img' aria-label='hand waving goodbye'>👋</span>
        </ChatButton>

        <ChatButton
          key='please-remove'
          onClick={hideChat}
          onAnimationComplete={() => {
            const el = document.getElementById('messages-container')
            el?.scrollBy(1000, 1000)
          }}
          {...animation(messages.length + 1)}
        >
          Remove forever
        </ChatButton>

        {userMessages.map(({ message, initial }, index) => (
          <ChatBubble
            key={`${message}-${index}`}
            delayFactor={0}
            justify='flex-end'
            initial={initial}
            onAnimationStart={() => {
              const el = document.getElementById('messages-container')
              el!.scrollBy(1000, 1000)
            }}
          >
            {message}
          </ChatBubble>
        ))}
      </AnimatePresence>
    </Container>
  )
}

export default ChatSection
