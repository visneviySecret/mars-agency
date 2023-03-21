import Button from '@/components/UI/Button/Button'
import React from 'react'
import { List } from '../quize.style'
import { DealStatus } from '../quize.utils'

interface IProps {
  setDealStatus: (val: DealStatus) => void
}

const buttonStyle = {
  minWidth: '100px',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '130%',
}

export default function Step1({ setDealStatus }: IProps) {
  const handleBuy = () => {
    setDealStatus(DealStatus.buy)
  }

  const handleSail = () => {
    setDealStatus(DealStatus.sail)
  }

  return (
    <List>
      <Button style={buttonStyle} onClick={handleBuy}>
        Купить
      </Button>
      <Button style={buttonStyle} onClick={handleSail}>
        Продать
      </Button>
    </List>
  )
}
