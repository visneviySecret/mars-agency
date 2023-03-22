import styled from 'styled-components'
import { Color } from '@/utils/color'
import { CheckArrowWhite } from '@/assets/Icons/checkArrow'

interface ChecboxProps {
  checked: boolean
  onChange: () => void
}

export const Label = styled.label``

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid ${Color.WHITE};
  cursor: pointer;
  translate: 0px 1px;
`

export const Checkbox = ({ checked, onChange }: ChecboxProps) => (
  <Label>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox>{checked && <CheckArrowWhite />}</StyledCheckbox>
  </Label>
)
