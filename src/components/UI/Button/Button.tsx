import React, { ReactNode } from 'react'
import { ButtonComponent } from './Button.styled'

interface IProps {
  theme?: string
  onClick: () => void
  children: ReactNode
}

export default function Button({ onClick, children, theme = 'dark' }: IProps) {
  return (
    <>
      <ButtonComponent theme={theme} onClick={onClick}>
        {children}
      </ButtonComponent>
    </>
  )
}
