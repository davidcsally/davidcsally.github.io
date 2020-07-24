import React from 'react';
import { css } from 'styled-components';

interface Props {
  className?: string;
}

const imgCss = css`
  height: 36px;
  width: 36px;
`;

const ChatProfileImage: React.FC<Props> = ({ className }) => (
  <img
    src="./david-linkedin.png"
    className={className}
    css={imgCss}
    alt="Chat profile"
  />
);

export default ChatProfileImage;
