import styled from 'styled-components'
import { indents } from '@/utils/indents'
import { getThemeColor } from '@/utils/helpers/getThemeColors'

export const Component = styled.div`
  max-width: 560px;
  max-height: 290px;
  margin-bottom: ${indents.indent20};
`

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input<{ theme: string }>`
  width: 100%;
  font-size: 14px;
  line-height: 140%;

  padding-inline: 20px;
  padding-block: 13px 11px;
  border: solid 1px;
  border-radius: 30px;

  ${({ theme }) => getThemeColor(theme)}

  &::placeholder {
    text-transform: uppercase;
  }

  &:focus {
    outline: none;
  }
`
