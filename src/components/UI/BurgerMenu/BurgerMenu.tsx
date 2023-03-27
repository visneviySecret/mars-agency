import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { Theme } from '@/utils/helpers/getThemeColors'
import styled from 'styled-components'

const getThemeColor = (theme: Theme) => {
  return theme === Theme.light ? Color.GREY : Color.WHITE
}

export const BurgerMenu = styled.span<{ isActive: boolean }>`
  position: relative;
  display: none;
  margin-top: 6px;
  transition: all 200ms ease-in-out;

  &::after,
  &::before,
  & {
    content: '';
    width: 21px;
    height: 2px;
    background-color: ${({ theme }) => getThemeColor(theme)};
    rotate: ${({ isActive }) => isActive && '135deg'};
  }

  &::after,
  &::before {
    position: absolute;
  }

  &::after {
    top: ${({ isActive }) => (isActive ? '0px' : '-6px')};
    rotate: ${({ isActive }) => isActive && '90deg'};
  }
  &::before {
    top: ${({ isActive }) => (isActive ? '0px' : '6px')};
    rotate: ${({ isActive }) => isActive && '180deg'};
  }

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
  }

  @media (max-width: ${breakPoints.Touch}) {
    &::after,
    &::before,
    & {
      width: 14px;
      height: 1.33px;
    }
  }
`
