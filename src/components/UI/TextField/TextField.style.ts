import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import { NeueMachina } from '@/styles/GlobalStyles'

const getThemeColor = (isDarkMode?: boolean) => {
  return isDarkMode ? Color.WHITE : Color.GREY
}

const getColor = (isQuize?: boolean, isDarkMode?: boolean) => {
  return isQuize ? getThemeColor(isDarkMode) : Color.WHITE
}

const getQuizeColor = (isQuize?: boolean) => {
  return isQuize ? Color.RED : Color.DARK_RED
}

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input<{
  isError?: boolean
  isQuize?: boolean
  isDarkMode?: boolean
}>`
  font-weight: 400;
  font-size: clamp(10px, 1.9vw, 14px);
  line-height: 140%;
  color: ${({ isQuize, isDarkMode }) => getColor(isQuize, isDarkMode)};
  width: 100%;
  background-color: transparent;
  border: none;
  -webkit-border-before: none;
  outline: none;
  border-bottom: 1px solid
    ${({ isError, isQuize, isDarkMode }) =>
      isError ? getQuizeColor(isQuize) : getColor(isQuize, isDarkMode)};
  padding-bottom: ${indents.indent5};

  &::placeholder {
    font-family: ${NeueMachina.style.fontFamily}, 'Inter';
    opacity: 0.4;
    color: ${({ isQuize, isDarkMode }) => getColor(isQuize, isDarkMode)};
    text-transform: uppercase;
  }

  &:focus-within {
    &::placeholder {
      opacity: 1;
    }
    outline: none;
  }
`

export const Error = styled.span<{ isQuize?: boolean }>`
  position: absolute;
  left: 0;
  bottom: max(-4.3vw, -25px);
  font-size: clamp(10px, 1.5vw, 12px);
  line-height: 140%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ isQuize }) => (isQuize ? Color.RED : Color.DARK_RED)};
`
