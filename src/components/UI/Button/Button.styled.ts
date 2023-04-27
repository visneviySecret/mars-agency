import styled from 'styled-components'
import { Consts } from '@/utils/consts'
import { NeueMachina } from '@/styles/GlobalStyles'
import {
  getThemeColor,
  darkThemeHover,
  lightThemeHover,
  Theme,
} from './Button.utils'
import { breakPoints } from '@/utils/breakPoints'

export const ButtonComponent = styled.button<{
  appTheme?: string
  customTheme?: Theme
  isBig?: boolean
}>`
  box-sizing: inline;
  width: 100%;
  font-size: ${({ isBig }) =>
    isBig ? 'clamp(14px, 2vw, 18px)' : 'clamp(10px, 1.9vw, 14px)'};
  line-height: 140%;
  font-family: ${NeueMachina.style.fontFamily};
  text-transform: uppercase;
  cursor: pointer;

  padding-inline: 40px;
  padding-block: 14px 12px;
  padding-block: ${({ isBig }) => isBig && '21px 18px'};
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
    padding-block: ${({ isBig }) => isBig && '20px 17px'};
  }

  @media (max-width: ${breakPoints.Touch}) {
    padding-block: ${({ isBig }) => isBig && '14.5px 11.5px'};
    &:hover {
      padding-block: ${({ isBig }) => isBig && '13.5px 10.5px'};
    }
  }
`
