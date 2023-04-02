import React, { ReactNode } from 'react'
import { ChipComponent } from './Chip.styled'
import { useTheme } from 'next-themes'
import Cross from '../Cross/Cross'

interface IProps {
  onClick: () => void
  children: ReactNode
  isActiveNode: boolean
  order?: number
}

export default function Chip({
  onClick,
  children,
  isActiveNode,
  order,
}: IProps) {
  const { theme } = useTheme()
  const currentTheme = theme

  const handleClick = () => {
    onClick()
  }

  return (
    <>
      <ChipComponent
        type="button"
        theme={currentTheme}
        onClick={handleClick}
        isActive={isActiveNode}
        order={order}
      >
        {children}
        {isActiveNode && <Cross currentTheme={currentTheme} />}
      </ChipComponent>
    </>
  )
}
