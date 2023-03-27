import React, { ReactNode, useState } from 'react'
import { ChipComponent } from './Chip.styled'
import { useTheme } from 'next-themes'
import Cross from '../Cross/Cross'

interface IProps {
  onClick: () => void
  children: ReactNode
  isActiveNode?: boolean
  order?: number
}

export default function Chip({
  onClick,
  children,
  isActiveNode = false,
  order,
}: IProps) {
  const { theme } = useTheme()
  const currentTheme = theme
  const [isActive, setIsActive] = useState(isActiveNode)

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
        order={order}
      >
        {children}
        {isActive && <Cross />}
      </ChipComponent>
    </>
  )
}
