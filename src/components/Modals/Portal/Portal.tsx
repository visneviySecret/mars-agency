import { Color } from '@/utils/color'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface PortalProps {
  children: ReactNode
}

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: ${Color.WHITE};
  width: 100vw;
  max-height: 100vh;
  overflow: auto;
`

function Portal({ children }: PortalProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
    setMounted(true)
  }, [])

  if (!mounted || !ref.current) return null

  return createPortal(<Overlay>{children}</Overlay>, ref.current)
}

export default Portal
