import React from 'react'
import CSS from 'csstype'
import { Error, Input, Wrapper } from './TextField.style'

interface IProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
  isQuize?: boolean
  style?: CSS.Properties
}

function TextField({
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
  style,
  isQuize,
}: IProps) {
  return (
    <Wrapper style={style}>
      <Input
        type="text"
        name={name}
        placeholder={placeholder || value}
        onChange={(e) => onChange(e)}
        isError={!!errorMessage}
        isQuize={isQuize}
      />
      <Error>{errorMessage}</Error>
    </Wrapper>
  )
}

export default TextField
