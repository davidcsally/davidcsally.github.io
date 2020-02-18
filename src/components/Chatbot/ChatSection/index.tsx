import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation, AnimatePresence } from 'framer-motion';

import ChatBubble from '../ChatBubble';
import ChatButton from '../ChatButton';

interface Props {
  closeChat: () => void;
  hideChat: () => void;
  userMessages: string[];
}

const Container = styled.div`
  display: block;
  padding: 1.5rem;
  overflow-y: auto;
`;

const messages = [
  'Hello!',
  'Just checking in 👀',
  'I hope you like my website!',
];

const ChatSection: React.FC<Props> = ({ closeChat, hideChat, userMessages }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }));
  });

  return (
    <Container id="messages-container">
      <AnimatePresence>
        {messages.map((message, index) => (
          <ChatBubble
            key={message}
            delayFactor={index + 1}
          >
            {message}
          </ChatBubble>
        ))}

        <ChatButton
          key="please-stop"
          justify="flex-end"
          onClick={closeChat}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: messages.length + 1 },
          }}
          exit={{}}
          onAnimationComplete={() => {
            const el = document.getElementById('messages-container');
            el!.scrollBy(1000, 1000);
          }}
        >
          Bye
          {' '}
          <span role="img" aria-label="hand waving goodbye">👋</span>
        </ChatButton>

        <ChatButton
          key="please-remove"
          justify="flex-end"
          onClick={hideChat}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: messages.length + 2 },
          }}
          exit={{}}
          onAnimationComplete={() => {
            const el = document.getElementById('messages-container');
            el?.scrollBy(1000, 1000);
          }}
        >
          Remove forever
        </ChatButton>

        {userMessages.map((message, index) => (
          <ChatBubble
            key={`${message}-${index}`}
            delayFactor={0}
            justify="flex-end"
            onAnimationStart={() => {
              const el = document.getElementById('messages-container');
              el!.scrollBy(1000, 1000);
            }}
          >
            {message}
          </ChatBubble>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default ChatSection;
