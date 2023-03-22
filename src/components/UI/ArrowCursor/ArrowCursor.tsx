import React from 'react'
import styled from 'styled-components'
import { Color } from '@/utils/color'

interface ArrowProps {
  isActive: boolean
  isDarkMode: boolean
}

const getModeColor = (isDarkMode: boolean) => {
  return isDarkMode ? Color.WHITE : Color.GREY
}

export const CursorWrapper = styled.span`
  position: absolute;
  top: 24px;
  right: 32px;
`

export const Component = styled.span<{
  isActive: boolean
  isDarkMode: boolean
}>`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 10px;
    height: 1px;
    background: ${({ isDarkMode }) => getModeColor(isDarkMode)};
    transition: rotate 250ms ease-in-out;
  }

  &::before {
    rotate: ${({ isActive }) => (isActive ? '45deg' : '135deg')};
  }
  &::after {
    translate: -7px;
    rotate: ${({ isActive }) => (isActive ? '-45deg' : '-135deg')};
  }
`

function ArrowCursor({ isActive, isDarkMode }: ArrowProps) {
  return (
    <CursorWrapper>
      <Component isDarkMode={isDarkMode} isActive={isActive} />
    </CursorWrapper>
  )
}

export { ArrowCursor }
