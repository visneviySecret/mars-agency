import styled from 'styled-components'
import { Color } from '@/utils/color'
import { CheckArrowBlack, CheckArrowWhite } from '@/assets/Icons/checkArrow'
import { useTheme } from 'next-themes'
import { Theme } from '../Button/Button.utils'

interface ChecboxProps {
  checked: boolean
  onChange: () => void
  isLanding?: boolean
}

const getThemeColor = (theme: Theme) => {
  return theme === Theme.light ? Color.GREY : Color.WHITE
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

export const StyledCheckbox = styled.div<{ theme: Theme; isLanding?: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${({ theme, isLanding }) =>
      isLanding ? Color.WHITE : getThemeColor(theme)};
  cursor: pointer;
  translate: 0px 1px;
`

export const Checkbox = ({ checked, onChange, isLanding }: ChecboxProps) => {
  const { theme } = useTheme()
  const icon = isLanding ? <CheckArrowWhite /> : <CheckArrowBlack />

  return (
    <Label>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox theme={theme} isLanding={isLanding}>
        {checked && icon}
      </StyledCheckbox>
    </Label>
  )
}
