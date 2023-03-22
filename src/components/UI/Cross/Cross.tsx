import { Color } from '@/utils/color'
import React from 'react'
import styled from 'styled-components'

export enum CrossSize {
  small = 'Small',
  big = 'Big',
}

export const CrossIcon = styled.span<{ size: CrossSize }>`
  position: relative;
  width: ${({ size }) => (size === CrossSize.small ? '8px' : '28px')};
  height: ${({ size }) => (size === CrossSize.small ? '8px' : '28px')};

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: ${Color.DARKGREY};
    width: ${({ size }) => (size === CrossSize.small ? '1.13px' : '3.96px')};
    height: ${({ size }) => (size === CrossSize.small ? '10.8px' : '35.64px')};
    translate: 350%;
  }

  &::after {
    rotate: 45deg;
  }
  &::before {
    rotate: -45deg;
  }
`

function Cross({ size = CrossSize.small }: { size?: CrossSize }) {
  return <CrossIcon size={size}></CrossIcon>
}

export default Cross
