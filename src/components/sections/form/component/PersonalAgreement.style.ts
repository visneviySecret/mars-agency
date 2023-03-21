import styled from 'styled-components'
import { Color } from '@/utils/color'

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`
export const Label = styled.label``
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid ${Color.WHITE};
  cursor: pointer;
  translate: 0px 1px;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export const CheckboxContainer = styled.div`
  display: inline-block;
`

export const Text = styled.span`
  color: ${Color.WHITE};
  line-height: 120%;
`
export const Underlined = styled.a`
  text-decoration: underline;
  cursor: pointer;
`
