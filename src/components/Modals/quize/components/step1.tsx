import React, { useEffect, useState } from 'react'
import { List, FieldsWrapper, Title, Wrapper } from './step.style'
import {
  DealStatus,
  rent_types_to_buy,
  rent_types_to_sail,
} from '../quize.utils'
import Chip from '@/components/UI/Chip/Chip'

interface IProps {
  dealStatus: DealStatus
}

export default function Step1({ dealStatus }: IProps) {
  const [objects, setObjects] = useState<string[]>([])
  const title =
    dealStatus === DealStatus.buy
      ? '1. Какие объекты вы ищите?'
      : '1. Какой объект вы продаете?'

  const dictionaries =
    dealStatus === DealStatus.buy ? rent_types_to_buy : rent_types_to_sail

  const handleClick = (value: string) => {
    if (objects.indexOf(value) === -1) {
      const result = [...objects, value]
      setObjects(result)
      return
    }
    const result = objects.filter((item) => item !== value)
    setObjects(result)
  }

  useEffect(() => {
    console.log(objects)
  }, [objects])

  return (
    <Wrapper>
      <Title>{title}</Title>
      <FieldsWrapper>
        <List>
          {dictionaries.map((item) => (
            <Chip key={item} onClick={() => handleClick(item)}>
              {item}
            </Chip>
          ))}
        </List>
      </FieldsWrapper>
    </Wrapper>
  )
}
