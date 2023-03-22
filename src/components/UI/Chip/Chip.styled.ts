import styled from 'styled-components'
import { Consts } from '@/utils/consts'
import { NeueMachina } from '@/styles/GlobalStyles'
import { getThemeColor, Theme } from './Chip.utils'
import { indents } from '@/utils/indents'
import { CrossIcon } from '../Cross/Cross'

export const ButtonComponent = styled.button<{
  theme: Theme
}>`
  display: flex;
  gap: ${indents.indent10};
  font-size: 14px;
  line-height: 140%;
  font-family: ${NeueMachina.style.fontFamily};
  text-transform: uppercase;
  cursor: pointer;

  padding-inline: 20px;
  padding-block: 13px 12px;
  border: none;
  border-radius: 25px;

  transition-property: background-color, color;
  transition-duration: ${Consts.toggleModDuration};

  ${(props) => getThemeColor(props.theme)}

  &:hover {
    opacity: 0.5;

    ${CrossIcon} {
      opacity: 0.5;
    }
  }
`
