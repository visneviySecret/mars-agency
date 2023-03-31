import { Color } from '@/utils/color'
import { Theme } from '@/utils/helpers/getThemeColors'
import React from 'react'
import styled from 'styled-components'
import { getHeight, getSize, getWidth } from './Cross.utils'

export enum CrossSize {
  small = 'Small',
  medium = 'Medium',
  big = 'Big',
}

export const CrossIcon = styled.span<{
  size: CrossSize
  isDarkMode?: boolean
}>`
  position: relative;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? Color.DARK_GREY : Color.WHITE};
    width: ${({ size }) => getWidth(size)};
    height: ${({ size }) => getHeight(size)};
    translate: 350% ${({ size }) => (size === CrossSize.big ? '-20%' : '-10%')};
  }

  &::after {
    rotate: 45deg;
  }
  &::before {
    rotate: -45deg;
  }
`

function Cross({
  size = CrossSize.small,
  currentTheme,
}: {
  size?: CrossSize
  currentTheme?: string
}) {
  const isDarkMode = currentTheme === Theme.dark
  return <CrossIcon size={size} isDarkMode={isDarkMode}></CrossIcon>
}

export default Cross
