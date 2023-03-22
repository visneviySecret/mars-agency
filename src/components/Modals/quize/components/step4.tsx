import React, { useState } from 'react'
import { DealStatus, cost_range, deal_date } from '../quize.utils'
import { StepPattern } from './StepPattern'

interface IProps {
  dealStatus: string
}

export default function Step4({ dealStatus }: IProps) {
  const [state, setState] = useState<string[]>([])
  const title =
    dealStatus === DealStatus.buy
      ? '4. Желаемая стоимость'
      : '4. Какие сроки продажи?'

  const dictionaries = dealStatus === DealStatus.buy ? cost_range : deal_date

  const handleClick = (value: string) => {
    if (state.indexOf(value) === -1) {
      const result = [...state, value]
      setState(result)
      return
    }
    const result = state.filter((item) => item !== value)
    setState(result)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <StepPattern
      title={title}
      nodes={dictionaries}
      handleClick={handleClick}
      textFieldValue={(dealStatus === DealStatus.sail && 'Свой вариант') || ''}
      handleChange={handleChange}
    />
  )
}
