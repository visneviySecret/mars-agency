import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import { Consts } from '@/utils/consts'

const lightTheme = {
  color: Color.BLACK,
  backgroundColor: Color.LIGHT,
  borderColor: Color.BLACK,
}

const lightThemeHover = {
  color: Color.LIGHT,
  backgroundColor: Color.BLACK,
}

const darkTheme = {
  color: '#363537',
  backgroundColor: '#FAFAFA',
  borderColor: '#999',
}

const darkThemeHover = {
  color: Color.BLACK,
  backgroundColor: Color.LIGHT,
}
export const ButtonComponent = styled.button<{ theme: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;

  text-transform: uppercase;

  width: auto;
  padding: ${indents.indent10};
  border: solid 1px;
  /* border-radius: 15px; */

  transition-property: background-color, color;
  transition-duration: ${Consts.toggleModDuration};

  &:hover {
    ${(props) => (props.theme === 'dark' && darkThemeHover) || lightThemeHover};
  }

  ${(props) => (props.theme === 'dark' && darkTheme) || lightTheme};
`
