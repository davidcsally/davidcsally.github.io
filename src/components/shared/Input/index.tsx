import styled from 'styled-components'

import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from 'react'

interface LabelProps {
  htmlFor: string
}

interface ComponentProps {
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

type Props = InputHTMLAttributes<HTMLInputElement> & ComponentProps

const Label = styled.label<LabelProps>`
  font-family: 'Inter', Helvetica, sans-serif;
  position: absolute;
  z-index: 5;
  font-size: 0.75rem;
  font-weight: 600;
  top: 1.25rem;
  left: 1rem;
  transition: transform 200ms cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  border: 1px solid transparent;
`

const StyledInput = styled.input`
  height: 3.5rem;
  color: black;
  padding-left: 1rem;
  padding-top: 1.25rem;
  position: relative;
  font-size: 1rem;
  width: 100%;
  border: 1px solid var(--grey);

  &:focus,
  &:hover {
    border-color: black;
    outline-width: 0;
  }

  &:focus {
    border-color: black;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    transform: translate(0, -0.75rem);
    font-size: 0.75rem;
    font-weight: normal;
  }
`

const InputContainer = styled.div`
  position: relative;
`

const Input = ({
  id,
  autoFocus = false,
  className,
  onChange,
  onKeyDown,
  placeholder = '',
  value,
}: Props) => (
  <InputContainer className={className}>
    <StyledInput
      id={id}
      value={value}
      onChange={onChange}
      placeholder="&nbsp;"
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
    />
    <Label htmlFor={id}>{placeholder}</Label>
  </InputContainer>
)

export default Input
