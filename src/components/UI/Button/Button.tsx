import React, { ReactNode } from 'react'
import { ButtonComponent } from './Button.styled'
import { useTheme } from 'next-themes'
import CSS from 'csstype'
import { Theme } from './Button.utils'

interface IProps {
  onClick: () => void
  children: ReactNode
  style?: CSS.Properties
  customTheme?: Theme
}

export default function Button({
  onClick,
  children,
  style,
  customTheme,
}: IProps) {
  const { theme } = useTheme()

  return (
    <>
      <ButtonComponent
        onClick={onClick}
        style={style}
        appTheme={theme}
        customTheme={customTheme}
      >
        {children}
      </ButtonComponent>
    </>
  )
}
