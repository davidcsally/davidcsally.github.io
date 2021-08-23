import { render, screen } from '@testing-library/react'

import ChatBubble from '.'

describe('ChatBubble', () => {
  it('renders a child message', () => {
    const message = 'chat message'

    render(<ChatBubble delay={0}>{message}</ChatBubble>)
    expect(screen.getByText(message)).toBeVisible()
  })
})
