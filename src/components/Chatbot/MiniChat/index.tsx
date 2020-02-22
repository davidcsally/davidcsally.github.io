import React from 'react';
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';

import Chat from 'components/icons/Chat';

const StyledChat = styled(Chat)`
  height: 85%;
  width: 85%;
`;

interface Props {
  className?: string;
  onClick: any;
}

const buttonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 6px;
  border-width: 0;
  background-color: var(--chat-primary);
`;

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
};

const MiniChat: React.FC<Props> = ({ className, onClick }) => (
  <motion.button
    className={className}
    onClick={onClick}
    css={buttonCss}
    aria-label="Open Chat"
    type="button"
    tabIndex={0}
    {...animation}
  >
    <StyledChat />
  </motion.button>
);

export default MiniChat;
