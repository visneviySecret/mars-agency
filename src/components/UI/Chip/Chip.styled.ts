import styled from 'styled-components'
import { Consts } from '@/utils/consts'
import { NeueMachina } from '@/styles/GlobalStyles'
import { indents } from '@/utils/indents'
import { getThemeColor, Theme } from '@/utils/helpers/getThemeColors'
import { breakPoints } from '@/utils/breakPoints'

export const ChipComponent = styled.button<{
  theme: Theme
  isActive?: boolean
  order?: number
}>`
  display: flex;
  align-items: center;
  gap: ${indents.indent10};
  max-height: 44px;
  width: auto;
  font-size: clamp(12px, 2.19vw, 16px);
  line-height: 140%;
  font-family: ${NeueMachina.style.fontFamily};
  cursor: pointer;

  padding-inline: 20px;
  padding-block: 11px 14px;
  border: 1px solid;
  border-radius: 25px;

  transition-property: background-color, color;
  transition-duration: ${Consts.toggleModDuration};

  ${({ theme, isActive }) => getThemeColor(theme, isActive)}

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: ${breakPoints.Tablet}) {
    order: ${({ order }) => order};
  }
  @media (max-width: ${breakPoints.Touch}) {
    order: 0;
  }
`
