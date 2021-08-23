import { render, screen } from '@testing-library/react'

import Input from '.'

describe('Input', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = () => {}
  const value = 'hello, jest!'
  const placeholder = 'placeholder'
  const id = 'test'

  beforeEach(() => {
    render(
      <Input id={id} onChange={noop} value={value} placeholder={placeholder} />
    )
  })

  it('renders the correct value', () => {
    expect(screen.getByRole('textbox')).toHaveValue(value)
  })

  it('renders the correct placeholder', () => {
    expect(screen.getByLabelText(placeholder)).toBeTruthy()
  })

  it('has the correct dom id', () => {
    expect(screen.getByRole('textbox')).toHaveAttribute('id', id)
  })
})
