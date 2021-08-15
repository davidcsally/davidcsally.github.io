import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ChatHeader from '.'

describe('ChatHeader', () => {
  it('calls `closeChat` when the close button is clicked', () => {
    const closeChat = jest.fn()

    render(<ChatHeader closeChat={closeChat} />)

    userEvent.click(screen.getByRole('button'))
    expect(closeChat).toHaveBeenCalledTimes(1)
  })
})
