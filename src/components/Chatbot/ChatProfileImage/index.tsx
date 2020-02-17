import React from 'react';
import { css } from 'styled-components/macro';

import ChatImage from 'assets/david-linkedin.png';

interface Props {
  className?: string;
}

const imgCss = css`
  height: 36px;
  width: 36px;
`;

const ChatProfileImage: React.FC<Props> = ({ className }) => (
  <img
    src={ChatImage}
    className={className}
    css={imgCss}
    alt="Chat profile"
  />
);

export default ChatProfileImage;
