import React from 'react'
import { useTheme } from 'next-themes'
import Button from '@/components/UI/Button/Button'

interface IProps {
  handleClick: () => void
}

export default function Hero({ handleClick }: IProps) {
  const { theme } = useTheme()

  return (
    <>
      <Button onClick={handleClick} theme={theme}>
        Switch theme
      </Button>
    </>
  )
}
