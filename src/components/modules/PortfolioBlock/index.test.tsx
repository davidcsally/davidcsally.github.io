import { render, screen } from '@testing-library/react'

import PortfolioBlock from '.'

describe('PortfolioBlock', () => {
  it('renders without crashing', () => {
    render(<PortfolioBlock />)

    expect(screen.getByTestId('portfolio-module')).toBeVisible()
  })
})
