import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import { Consts } from '@/utils/consts'

const getModeColor = (isDarkMode: boolean) => {
  return isDarkMode ? Color.BLACK : Color.WHITE
}

const lightTheme = {
  color: Color.BLACK,
  backgroundColor: Color.WHITE,
  borderColor: Color.BLACK,
}

const darkTheme = {
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
  borderColor: Color.WHITE,
}

export const SelectorWrapper = styled.div`
  position: relative;
  max-width: 730px;
`

export const SelectorComponent = styled.div<{ theme: string }>`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;

  max-height: 42px;
  padding: ${indents.indent10} 25px;
  border: solid 1px;

  transition-property: background-color, color;
  transition-duration: ${Consts.toggleModDuration};

  ${(props) => (props.theme === 'dark' && darkTheme) || lightTheme};
  opacity: 0.8;
`

export const OptionsList = styled.ul`
  position: absolute;
  list-style: none;

  width: 100%;
`

export const Option = styled.li`
  &:hover {
    background: red;
  }
`

export const ItemCursorWrapper = styled.span`
  position: absolute;
  top: 21px;
  right: 25px;
`

export const ItemCursor = styled.span<{
  isActive: boolean
  isDarkMode: boolean
}>`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 14px;
    height: 1px;
    background: ${({ isActive, isDarkMode }) =>
      isActive ? getModeColor(isDarkMode) : getModeColor(isDarkMode)};
    transition: rotate 250ms ease-in-out;
  }

  &::before {
    rotate: ${({ isActive }) => (isActive ? '45deg' : '135deg')};
  }
  &::after {
    translate: -10px;
    rotate: ${({ isActive }) => (isActive ? '-45deg' : '-135deg')};
  }
`
