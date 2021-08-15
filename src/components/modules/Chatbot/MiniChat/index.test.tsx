import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MiniChat from '.'

describe('ChatHeader', () => {
  it('calls `onClick` when the button is clicked', () => {
    const onClick = jest.fn()

    render(<MiniChat onClick={onClick} />)

    userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
