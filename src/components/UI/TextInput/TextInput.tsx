import React from 'react'
import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'

interface IProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input`
  color: ${Color.WHITE};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${Color.WHITE};
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  padding-bottom: ${indents.indent20};

  text-transform: uppercase;

  &::placeholder {
    color: ${Color.WHITE};
  }

  &:focus-within {
    outline: 3px solid ${Color.LIGHT};
    border-bottom: none;
    margin-bottom: 1px;
  }
`

function TextInput({ name, placeholder, value, onChange }: IProps) {
  return (
    <Input
      type="text"
      name={name}
      placeholder={placeholder || value}
      onChange={(e) => onChange(e)}
    />
  )
}

export default TextInput
