import React from 'react'
import Button from '@/components/UI/Button/Button'
import Header from '@/components/Header/Header'

interface IProps {
  handleClick: () => void
}

export default function Hero({ handleClick }: IProps) {
  return (
    <>
      <Header />
      <Button onClick={handleClick}>Switch theme</Button>
    </>
  )
}
