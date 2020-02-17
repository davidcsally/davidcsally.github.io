import React from 'react';
import styled from 'styled-components';

import P from 'components/Text';
import CloseIcon from 'components/icons/CloseIcon';

interface Props {
  closeChat: () => void;
}


const TopSection = styled.div`
  padding: 0 0.5rem;
  justify-content: space-evenly;
  background-color: rgb(10, 91, 255);
  min-height: 3.75rem;
  display: flex;
  width: 100%;
`;


const Block = styled.div`
  display: block;
  margin: auto 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InvertedP = styled(P)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.25rem;
  font-variation-settings: 'wght' 600;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 500ms ease-in-out;
  height: 1rem;
  width: 1rem;
  position: absolute;
  right: 0.75rem;
  padding: 1rem;

  svg {
    height: 1rem;
    width: 1rem;
  }

  &:focus,
  &:hover {
    transform: rotate(135deg);
  }
`;

const ChatHeader: React.FC<Props> = ({ closeChat }) => (
  <TopSection>
    <Block>
      <Flex>
        <InvertedP>www.davidcsally.com</InvertedP>
        <CloseButton onClick={closeChat}>
          <IconContainer>
            <CloseIcon fill="white" />
          </IconContainer>
        </CloseButton>
      </Flex>
    </Block>
  </TopSection>
);

export default ChatHeader;
