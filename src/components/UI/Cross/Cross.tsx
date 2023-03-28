import { Color } from '@/utils/color'
import { Theme } from '@/utils/helpers/getThemeColors'
import React from 'react'
import styled from 'styled-components'

export enum CrossSize {
  small = 'Small',
  big = 'Big',
}

export const CrossIcon = styled.span<{
  size: CrossSize
  isDarkMode?: boolean
}>`
  position: relative;
  width: ${({ size }) =>
    size === CrossSize.small ? '8px' : 'clamp(12px, 2.5vw, 28px)'};
  height: ${({ size }) =>
    size === CrossSize.small ? '8px' : 'clamp(12px, 2.5vw, 28px)'};
  height: 16px;

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? Color.DARK_GREY : Color.WHITE};
    width: ${({ size }) =>
      size === CrossSize.small ? '1.13px' : 'clamp(1.5px, 0.5vw, 3.96px)'};
    height: ${({ size }) =>
      size === CrossSize.small ? '10.8px' : 'clamp(15.5px, 3.5vw,35.64px)'};
    translate: 350% ${({ size }) => (size === CrossSize.big ? '-20%' : '40%')};
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
