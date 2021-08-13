import styled from 'styled-components'

import Input from 'components/Input'
import P from 'components/Text'

interface Props {
  chatValue: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitMessage: (e: any) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setChatValue: (e: any) => void
}

const Disclaimer = styled(P)`
  font-size: 0.5rem;
  color: darkgray;
  line-height: normal;
  text-align: center;
  margin-top: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.15);
  height: 8.25rem;
  padding: 0.75rem;
`

const ChatFooter = ({ chatValue, submitMessage, setChatValue }: Props) => (
  <Container>
    <Input
      value={chatValue}
      id="chat-input"
      onKeyDown={submitMessage}
      onChange={(e) => setChatValue(e.target.value)}
      placeholder="Leave a message for David"
    />
    <Disclaimer>This does not collect or send any information</Disclaimer>
  </Container>
)

export default ChatFooter
