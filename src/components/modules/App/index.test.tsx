import { render, screen } from '@testing-library/react'

import App from '.'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)

    expect(screen.getByTestId('app')).toBeTruthy()
  })

  it.todo('opens the cookie bar after a timeout')

  it.todo('opens the chat after the users closes the cookie bar ')

  it.todo('sets a cookie to remember that the cookie bar has been accepted')
})
