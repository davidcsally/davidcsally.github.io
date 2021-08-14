import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CookieBar } from '.'

describe('CookieBar', () => {
  const closeCookieBar = jest.fn()

  it('is visible when `isOpen` is set to true', async () => {
    render(<CookieBar isOpen closeCookieBar={closeCookieBar} />)

    await waitFor(() => {
      expect(screen.getByTestId('cookie-bar')).toBeVisible()
    })
  })

  it('is hidden when `isOpen` is set to false', () => {
    render(<CookieBar isOpen={false} closeCookieBar={closeCookieBar} />)

    expect(screen.queryByTestId('cookie-bar')).toBeNull()
  })

  it('calls the `closeCookieBar` method when the button is clicked', () => {
    render(<CookieBar isOpen closeCookieBar={closeCookieBar} />)

    userEvent.click(screen.getByRole('button'))

    expect(closeCookieBar).toHaveBeenCalledTimes(1)
  })
})
