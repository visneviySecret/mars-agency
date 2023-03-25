import React from 'react'
import CSS from 'csstype'
import { Error, Input, Wrapper } from './TextField.style'
import { getFormattedValue } from './TextField.utils'

interface IProps {
  name: string
  placeholder: string
  value: string
  onChange: (key: string, value: string) => void
  errorMessage?: string
  isQuize?: boolean
  style?: CSS.Properties
  type?: string
}

function TextField({
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
  style,
  isQuize,
  type = 'text',
}: IProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formattedValue = getFormattedValue(value, name)
    const key = e.target.name
    onChange(key, formattedValue)
  }

  return (
    <Wrapper style={style}>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        isError={!!errorMessage}
        isQuize={isQuize}
      />
      <Error isQuize={isQuize}>{errorMessage}</Error>
    </Wrapper>
  )
}

export default TextField
