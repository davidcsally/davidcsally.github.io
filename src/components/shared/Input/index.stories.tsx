import { useState } from 'react'

import Input from '.'

export default {
  title: 'Input',
  component: Input,
}

const Container = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      id="test"
      onChange={(e) => setValue(e.target.value)}
      value={value}
      placeholder="Leave a message for David"
    />
  )
}

export const normal = () => <Container />
