import { render, screen } from '@testing-library/react'

import { PortfolioItem } from '.'

describe('PortfolioItem', () => {
  it('renders a title, description, skills, and logo', () => {
    render(
      <PortfolioItem
        title="title"
        description="description"
        skills={['one', 'two']}
        logo={{
          component: () => <svg data-testid="svg-element" />,
          backgroundColor: 'black',
          height: '10px',
          width: '10px',
        }}
      />
    )

    expect(screen.getByRole('heading', { name: 'title' })).toBeVisible()
    expect(screen.getByText('description')).toBeVisible()
    expect(screen.getByText('one, two')).toBeVisible()
    expect(screen.getByTestId('svg-element')).toBeVisible()
  })
})
