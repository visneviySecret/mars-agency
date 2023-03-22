import React from 'react'
import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'

interface IProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input<{ isError?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${Color.WHITE};
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid
    ${({ isError }) => (isError ? Color.RED : Color.WHITE)};
  padding-bottom: ${indents.indent20};

  &::placeholder {
    opacity: 0.4;
    color: ${Color.WHITE};
    text-transform: uppercase;
  }

  &:focus-within {
    &::placeholder {
      opacity: 1;
    }
    outline: none;
  }
`

const Error = styled.span`
  position: absolute;
  left: 0;
  bottom: -25px;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Color.RED};
`

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
