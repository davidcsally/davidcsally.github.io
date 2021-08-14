import { render, screen } from '@testing-library/react'

import HeroBlock from '.'

describe('HeroBlock', () => {
  it('renders without crashing', () => {
    render(<HeroBlock />)

    expect(screen.getByTestId('hero-module')).toBeVisible()
  })
})
