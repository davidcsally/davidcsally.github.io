import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ChatFooter from '.'

describe('ChatFooter', () => {
  let submitMessage
  let setChatValue

  beforeEach(() => {
    submitMessage = jest.fn()
    setChatValue = jest.fn()

    render(
      <ChatFooter
        submitMessage={submitMessage}
        chatValue="test"
        setChatValue={setChatValue}
      />
    )
  })

  it('calls submitMessage on key down', () => {
    userEvent.type(screen.getByRole('textbox'), '{enter}')

    expect(submitMessage).toHaveBeenCalled()
  })

  it('calls setChatValue on change', () => {
    userEvent.type(screen.getByRole('textbox'), 'hello')

    expect(setChatValue).toHaveBeenCalled()
  })

  it('displays the correct value in the input', () => {
    expect(screen.getByRole('textbox')).toHaveDisplayValue('test')
  })
})
