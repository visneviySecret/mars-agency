import React from 'react'
import styled from 'styled-components'

export const CrossIcon = styled.span`
  position: relative;

  &::after,
  ::before {
    content: '';
    position: absolute;
    width: 1.5px;
    height: 11.3px;
  }

  &::after {
    rotate: 45deg;
  }
  &::before {
    rotate: -45deg;
  }
`

function Cross() {
  return <CrossIcon />
}

export default Cross
