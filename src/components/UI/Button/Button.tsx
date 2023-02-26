import React, { ReactNode } from 'react'
import { ButtonComponent } from './Button.styled'
import { useTheme } from 'next-themes'

interface IProps {
  onClick: () => void
  children: ReactNode
}

export default function Button({ onClick, children }: IProps) {
  const { theme } = useTheme()

  return (
    <>
      <ButtonComponent theme={theme} onClick={onClick}>
        {children}
      </ButtonComponent>
    </>
  )
}
