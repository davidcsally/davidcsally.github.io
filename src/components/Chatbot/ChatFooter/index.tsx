import React from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import P from 'components/Text';

interface Props {
  chatValue: string;
  submitMessage: (e: any) => void;
  setChatValue: (e: any) => void;
}

const Disclaimer = styled(P)`
  font-size: 0.5rem;
  color: darkgray;
  line-height: normal;
  text-align: center;
  margin-top: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 23px 0 rgba(0,0,0,.15);
  height: 130px;
  padding: 0.75rem;
`;

const ChatFooter: React.FC<Props> = ({ chatValue, submitMessage, setChatValue }) => (
  <Container>
    <Input
      value={chatValue}
      id="chat-input"
      onKeyDown={submitMessage}
      onChange={(e: any) => setChatValue(e.target.value)}
      placeholder="Leave a message for David"
    />
    <Disclaimer>This does not collect or send any information</Disclaimer>
  </Container>
);

export default ChatFooter;
