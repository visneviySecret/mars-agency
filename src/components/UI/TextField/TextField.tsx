import React from 'react'
import CSS from 'csstype'
import { Error, Input, Wrapper } from './TextField.style'
import { getFormattedValue } from './TextField.utils'
import { useTheme } from 'next-themes'
import { Theme } from '@/utils/helpers/getThemeColors'
import { FieldError, FieldErrorsImpl } from 'react-hook-form/dist/types/errors'
import { Merge } from 'react-hook-form/dist/types/utils'

interface IProps {
  name: 'name' | 'phone' | 'number'
  placeholder: string
  value: string
  onChange: (key: string, value: string) => void
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldError>>
  isQuize?: boolean
  style?: CSS.Properties
  type?: string
}

function TextField({
  name,
  value,
  placeholder,
  errorMessage,
  onChange,
  style,
  isQuize,
  type = 'text',
}: IProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark

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
        isDarkMode={isDarkMode}
      />
      <Error isQuize={isQuize}>{errorMessage?.toString()}</Error>
    </Wrapper>
  )
}

export default TextField
