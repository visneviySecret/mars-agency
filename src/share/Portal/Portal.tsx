import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface PortalProps {
  children: ReactNode
  isActive: boolean
  opacity?: number
  isDisableTransition?: boolean
}

const Overlay = styled.div<{
  isActive: boolean
  opacity?: number
  isDisableTransition?: boolean
}>`
  z-index: 1000;
  position: fixed;
  top: ${({ isActive }) => (isActive ? '50%' : '100%')};
  left: ${({ isActive }) => (isActive ? '50%' : '100%')};
  translate: ${({ isActive }) => isActive && '-50% -50%'};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  opacity: ${({ opacity, isActive }) => (isActive ? opacity || 1 : 0)};

  transition: ${({ isDisableTransition }) =>
    !isDisableTransition && 'translate 0.3s'};

  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Color.CORAL};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${Color.LIGHT10};
  }
  @media (max-width: ${breakPoints.Tablet}) {
  }
`

function Portal({
  isActive,
  children,
  opacity,
  isDisableTransition,
}: PortalProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
    setMounted(true)
  }, [])

  if (!mounted || !ref.current) return null

  return createPortal(
    <Overlay
      isActive={isActive}
      opacity={opacity}
      isDisableTransition={isDisableTransition}
    >
      {children}
    </Overlay>,
    ref.current,
  )
}

export default Portal
