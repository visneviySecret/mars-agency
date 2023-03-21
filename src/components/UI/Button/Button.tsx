import React, { ReactNode } from 'react'
import { ButtonComponent } from './Button.styled'
import { useTheme } from 'next-themes'
import CSS from 'csstype'

interface IProps {
  onClick: () => void
  children: ReactNode
  style?: CSS.Properties
}

export default function Button({ onClick, children, style }: IProps) {
  const { theme } = useTheme()

  return (
    <>
      <ButtonComponent theme={theme} onClick={onClick} style={style}>
        {children}
      </ButtonComponent>
    </>
  )
}
