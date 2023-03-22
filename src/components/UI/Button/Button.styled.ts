import styled from 'styled-components'
import { Consts } from '@/utils/consts'
import { NeueMachina } from '@/styles/GlobalStyles'
import {
  getThemeColor,
  darkThemeHover,
  lightThemeHover,
  Theme,
} from './Button.utils'

export const ButtonComponent = styled.button<{
  appTheme?: string
  customTheme?: Theme
  isCoral?: boolean
}>`
  font-size: 14px;
  line-height: 140%;
  font-family: ${NeueMachina.style.fontFamily};
  text-transform: uppercase;
  cursor: pointer;

  padding-inline: 40px;
  padding-block: ${({ customTheme }) =>
    customTheme === Theme.coral ? '21px 18px' : '14px 12px'};
  border: none;
  border-radius: 25px;

  transition-property: background-color, color;
  transition-duration: ${Consts.toggleModDuration};

  ${({ customTheme, appTheme }) => getThemeColor(customTheme || appTheme)}

  &:hover {
    ${({ appTheme }) =>
      appTheme === 'dark' ? darkThemeHover : lightThemeHover};
    background-color: transparent;
    border: 1px solid;
  }
`
