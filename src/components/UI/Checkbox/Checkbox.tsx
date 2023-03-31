import styled from 'styled-components'
import { Color } from '@/utils/color'
import { CheckArrow } from '@/assets/Icons/checkArrow'
import { useTheme } from 'next-themes'
import { Theme } from '../Button/Button.utils'
import { breakPoints } from '@/utils/breakPoints'
import { useMediaQuery } from '@/hooks/useMedia'

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
  -webkit-appearance: none;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div<{ theme: Theme; isLanding?: boolean }>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${({ theme, isLanding }) =>
      isLanding ? Color.WHITE : getThemeColor(theme)};
  cursor: pointer;
  translate: 0px 1px;

  @media (max-width: ${breakPoints.Touch}) {
    width: 15px;
    height: 15px;
  }
`

export const CheckWrrowWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 2px;
`

export const Checkbox = ({ checked, onChange, isLanding }: ChecboxProps) => {
  const { theme } = useTheme()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Touch})`)
  const color = isLanding ? Color.WHITE : Color.GREY
  const width = isSmallScreen ? 10 : 14

  return (
    <Label>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox theme={theme} isLanding={isLanding}>
        {checked && (
          <CheckWrrowWrapper>
            <CheckArrow size={width} color={color} />
          </CheckWrrowWrapper>
        )}
      </StyledCheckbox>
    </Label>
  )
}
