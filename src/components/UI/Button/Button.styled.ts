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
  theme: Theme
  isCoral?: boolean
}>`
  font-size: 14px;
  line-height: 140%;
  font-family: ${NeueMachina.style.fontFamily};
  cursor: pointer;

  text-transform: uppercase;

  max-height: 57px;
  padding: 14px 40px 12px 40px;
  border: solid 1px;
  border: none;
  border-radius: 25px;

  transition-property: background-color, color;
  transition-duration: ${Consts.toggleModDuration};

  &:hover {
    ${(props) => (props.theme === 'dark' && darkThemeHover) || lightThemeHover};
  }

  ${(props) => getThemeColor(props.theme)}
`
