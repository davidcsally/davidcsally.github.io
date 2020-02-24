import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation } from 'framer-motion';

import ChatBubble from '../ChatBubble';
import ChatButton from '../ChatButton';

import { ChatMessage } from '../types';
import { SET_ANIMATION } from '../reducer';

interface Props {
  closeChat: () => void;
  hideChat: () => void;
  savedMessages: ChatMessage[];
  newMessages: ChatMessage[];
  updateMessages: any;
}

const Container = styled.div`
  display: block;
  height: 20rem;
  flex-grow: 1;
  padding: 1.5rem;
  overflow-y: auto;
`;

const Placeholder = styled(ChatBubble)`
  p {
    background-color: transparent
  }
`;

const ChatSection: React.FC<Props> = ({
  closeChat,
  savedMessages,
  newMessages,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }));

    // scroll after mount in case there are saved messages
    const el = document.getElementById('messages-container');
    if (el) el.scrollBy(1000, 1000);
  });

  return (
    <Container id="messages-container">
      {savedMessages.map((m, index) => {
        const {
          message,
          initial,
          type,
          action,
          isSender,
        } = m;

        if (type === 'button') {
          return (
            <ChatButton
              delay={index}
              key={`${message}-${index}`}
              initial={initial}
              justify={isSender ? 'flex-end' : 'flex-start'}
              onClick={action === 'close' ? closeChat : () => { }}
              onAnimationComplete={() => {
                const el = document.getElementById('messages-container');
                el!.scrollBy(1000, 1000);
              }}
            >
              {message}
            </ChatButton>
          );
        }

        return (
          <ChatBubble
            key={index}
            initial={initial}
            delay={index}
            justify={isSender ? 'flex-end' : 'flex-start'}
            onAnimationComplete={() => {
              const el = document.getElementById('messages-container');
              el!.scrollBy(1000, 1000);
            }}
          >
            {message}
          </ChatBubble>
        );
      })}

      {
        newMessages.map((m, index) => {
          const {
            message,
            initial,
            isSender,
          } = m;

          return (
            <ChatBubble
              key={index}
              initial={initial}
              justify={isSender ? 'flex-end' : 'flex-start'}
              delay={0}
              onAnimationStart={() => {
                const el = document.getElementById('messages-container');
                el!.scrollBy(1000, 1000);
              }}
            >
              {message}
            </ChatBubble>
          );
        })
      }
      <Placeholder delay={0}> </Placeholder>
    </Container>
  );
};

export default ChatSection;
