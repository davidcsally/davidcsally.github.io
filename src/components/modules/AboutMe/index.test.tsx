import { render, screen } from '@testing-library/react'

import { AboutMe } from '.'

describe('AboutMe', () => {
  it('renders without crashing', () => {
    render(<AboutMe />)

    screen.getByTestId('about-me')
  })
})
