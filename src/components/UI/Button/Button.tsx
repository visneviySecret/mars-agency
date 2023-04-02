import React, { ReactNode } from 'react'
import CSS from 'csstype'
import { ButtonComponent } from './Button.styled'
import { useTheme } from 'next-themes'
import { Theme } from './Button.utils'

interface IProps {
  onClick?: () => void
  children: ReactNode
  style?: CSS.Properties
  customTheme?: Theme
  isBig?: boolean
  type?: 'submit' | 'button'
}

export default function Button({
  onClick,
  children,
  style,
  customTheme,
  isBig,
  type = 'button',
}: IProps) {
  const { theme } = useTheme()

  return (
    <>
      <ButtonComponent
        type={type}
        onClick={onClick}
        style={style}
        appTheme={theme}
        customTheme={customTheme}
        isBig={isBig}
      >
        {children}
      </ButtonComponent>
    </>
  )
}
