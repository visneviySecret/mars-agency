import React, { ReactNode } from 'react'
import CSS from 'csstype'
import { ButtonComponent } from './Button.styled'
import { useTheme } from 'next-themes'
import { Theme } from './Button.utils'

interface IProps {
  onClick: () => void
  children: ReactNode
  style?: CSS.Properties
  customTheme?: Theme
  isBig?: boolean
}

export default function Button({
  onClick,
  children,
  style,
  customTheme,
  isBig,
}: IProps) {
  const { theme } = useTheme()

  return (
    <>
      <ButtonComponent
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
