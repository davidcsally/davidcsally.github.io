import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ChatButton from '.'

describe('ChatButton', () => {
  it('calls the onClick method on click', () => {
    const onClick = jest.fn()
    render(
      <ChatButton delay={0} onClick={onClick}>
        button
      </ChatButton>
    )

    userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalled()
  })
})
