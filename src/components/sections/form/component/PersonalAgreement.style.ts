import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`
export const Label = styled.label``

export const CheckboxContainer = styled.div`
  display: inline-block;
`

export const Text = styled.span<{ isLanding?: boolean }>`
  color: ${({ isLanding }) => isLanding && Color.WHITE};
  line-height: 120%;
`
export const Underlined = styled.a`
  text-decoration: underline;
  cursor: pointer;
`
