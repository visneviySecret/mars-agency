import Button from '@/components/UI/Button/Button'
import React, { useState } from 'react'
import { List } from './step.style'
import {
  DealStatus,
  rent_types_to_buy,
  rent_types_to_sail,
} from '../quize.utils'

interface IProps {
  dealStatus: string
}

const buttonStyle = {
  minWidth: '100px',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '130%',
}

export default function Step2({ dealStatus }: IProps) {
  const [stash, setStash] = useState<string[]>([])
  const dictionaries =
    dealStatus === DealStatus.sail ? rent_types_to_buy : rent_types_to_sail

  const handleClick = (item: string) => {
    setStash([])
    console.log('remove item: ', item)
    console.log('dictionaries: ', dictionaries)
  }

  return (
    <List>
      {stash.map((item, index) => (
        <Button
          key={index}
          style={buttonStyle}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      ))}
    </List>
  )
}
