import { render, screen } from '@testing-library/react'

import ChatProfileImage from '.'

describe('ChatProfileImage', () => {
  it('renders without crashing', () => {
    render(<ChatProfileImage />)

    expect(screen.getByTestId('profile-image')).toBeVisible()
  })
})
