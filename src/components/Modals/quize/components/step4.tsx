import React, { useEffect, useState } from 'react'
import { DealStatus, cost_range, deal_date } from '../quize.utils'
import { StepPattern } from './StepPattern'

interface IProps {
  dealStatus: string
  handleForm: (key: string, value: string[]) => void
}

export default function Step4({ dealStatus, handleForm }: IProps) {
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

  const handleChange = (value: string) => {
    const icon = dealStatus === DealStatus.buy ? 'Р' : 'месяцев'
    const result = `${value}, ${icon}`
    setState([result])
  }

  useEffect(() => {
    handleForm(title, state)
  }, [state])

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
