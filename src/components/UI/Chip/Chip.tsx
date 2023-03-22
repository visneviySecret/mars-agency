import React, { ReactNode, useState } from 'react'
import { ChipComponent } from './Chip.styled'
import { useTheme } from 'next-themes'
import Cross from '../Cross/Cross'

interface IProps {
  onClick: () => void
  children: ReactNode
}

export default function Chip({ onClick, children }: IProps) {
  const { theme } = useTheme()
  const currentTheme = theme
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    onClick()
    setIsActive((prev) => !prev)
  }

  return (
    <>
      <ChipComponent
        theme={currentTheme}
        onClick={handleClick}
        isActive={isActive}
      >
        {children}
        {isActive && <Cross />}
      </ChipComponent>
    </>
  )
}
