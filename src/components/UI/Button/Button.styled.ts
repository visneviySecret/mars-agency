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
  isBig?: boolean
}>`
  width: 100%;
  font-size: 14px;
  line-height: 140%;
  font-family: ${NeueMachina.style.fontFamily};
  text-transform: uppercase;
  cursor: pointer;

  padding-inline: 40px;
  padding-block: ${({ isBig }) => (isBig ? '18px 21px' : '14px 12px')};
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
    padding-block: ${({ isBig }) => isBig && '8px 11px'};
  }
`
