import React from 'react';
import styled, { css } from 'styled-components/macro';

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

const MiniChat: React.FC<Props> = ({ className, onClick }) => (
  <button
    className={className}
    onClick={onClick}
    css={buttonCss}
    aria-label="Open Chat"
    type="button"
  >
    <StyledChat />
  </button>
);

export default MiniChat;
