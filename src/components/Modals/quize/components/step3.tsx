import Button from '@/components/UI/Button/Button'
import React, { useState } from 'react'
import { List } from './step.style'
import { DealStatus, locations } from '../quize.utils'

interface IProps {
  dealStatus: string
}

const buttonStyle = {
  minWidth: '100px',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '130%',
}

export default function Step3({ dealStatus }: IProps) {
  const [stash, setStash] = useState<string[]>([])
  const dictionaries = dealStatus === DealStatus.buy && locations

  const handleClick = (value: string) => {
    const result = stash.filter((item) => item !== value)
    setStash(result)
  }

  return (
    <>
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
    </>
  )
}
