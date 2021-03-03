import { useState } from 'react'

import Input from '.'

export default {
  title: 'Input',
  component: Input,
}

const Container = () => {
  const [value, setValue] = useState('')

  const onChange = (e: any) => setValue(e.target.value)

  return (
    <Input
      id="test"
      onChange={onChange}
      value={value}
      placeholder="Leave a message for David"
    />
  )
}

export const normal = () => <Container />
