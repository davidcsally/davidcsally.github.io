import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('Footer', () => {
  it('renders a link to the source code', () => {
    render(<Footer />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/davidcsally/davidcsally.github.io'
    )
  })
})
