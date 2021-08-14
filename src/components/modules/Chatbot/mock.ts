import { ChatMessage } from './types'

export const messages: ChatMessage[] = [
  {
    message: 'Hello!',
    initial: true,
    isSender: false,
  },
  {
    message: 'Just checking in 👀',
    initial: true,
    isSender: false,
  },
  {
    message: 'I hope you like my website!',
    initial: true,
    isSender: false,
  },
  {
    message: 'Bye 👋',
    initial: true,
    isSender: true,
    type: 'button',
    action: 'close',
  },
]

const newMessages: ChatMessage[] = []

export const initialState = {
  savedMessages: messages,
  newMessages,
}
