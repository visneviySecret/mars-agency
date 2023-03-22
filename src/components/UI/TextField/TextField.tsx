import React from 'react'
import { Error, Input, Wrapper } from './TextField.style'

interface IProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

function TextField({
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
}: IProps) {
  return (
    <Wrapper>
      <Input
        type="text"
        name={name}
        placeholder={placeholder || value}
        onChange={(e) => onChange(e)}
        isError={!!errorMessage}
      />
      <Error>{errorMessage}</Error>
    </Wrapper>
  )
}

export default TextField
