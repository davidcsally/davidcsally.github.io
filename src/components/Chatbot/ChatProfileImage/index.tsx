import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string;
}

const Img = styled.img`
  height: 36px;
  width: 36px;
`

const ChatProfileImage: React.FC<Props> = ({ className }) => (
  <Img
    src="/images/david-linkedin.png"
    className={className}
    alt="Chat profile"
  />
)

export default ChatProfileImage
