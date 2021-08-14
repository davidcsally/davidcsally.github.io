import { render, screen } from '@testing-library/react'

import TechnologySection from '.'

describe('Tech', () => {
  it('renders without crashing', () => {
    render(<TechnologySection />)

    screen.getByTestId('technology-section')
  })
})
