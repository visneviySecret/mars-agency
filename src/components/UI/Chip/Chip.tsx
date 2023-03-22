import React, { ReactNode } from 'react'
import { ButtonComponent } from './Chip.styled'
import { useTheme } from 'next-themes'
import Cross from '../Cross/Cross'

interface IProps {
  onClick: () => void
  children: ReactNode
}

export default function Chip({ onClick, children }: IProps) {
  const { theme } = useTheme()
  const currentTheme = theme

  return (
    <>
      <ButtonComponent theme={currentTheme} onClick={onClick}>
        {children}
        <Cross />
      </ButtonComponent>
    </>
  )
}
