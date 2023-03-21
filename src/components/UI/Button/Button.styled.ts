import styled from 'styled-components'
import { Color } from '@/utils/color'
import { Consts } from '@/utils/consts'
import { cooper } from '@/styles/GlobalStyles'

const lightTheme = {
  color: Color.WHITE,
  backgroundColor: Color.GREY,
  borderColor: Color.BLACK,
}

const darkTheme = {
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
  borderColor: Color.WHITE,
}

const lightThemeHover = {
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
}

const darkThemeHover = {
  color: Color.BLACK,
  backgroundColor: Color.WHITE,
}

export const ButtonComponent = styled.button<{ theme: string }>`
  font-size: 14px;
  line-height: 140%;
  font-family: ${cooper.style.fontFamily};
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

  ${(props) => (props.theme === 'dark' && darkTheme) || lightTheme};
`
