import React, { useState } from 'react'
import { DealStatus, preferences } from '../quize.utils'
import { StepPattern } from './StepPattern'

interface IProps {
  dealStatus: string
}

export default function Step3({ dealStatus }: IProps) {
  const [areas, setAreas] = useState<string[]>([])

  const title =
    dealStatus === DealStatus.buy
      ? '3. Что для вас важнее всего?'
      : '3. Укажите площадь недвижимости'

  const handleClick = (value: string) => {
    if (areas.indexOf(value) === -1) {
      const result = [...areas, value]
      setAreas(result)
      return
    }
    const result = areas.filter((item) => item !== value)
    setAreas(result)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <StepPattern
      title={title}
      nodes={(dealStatus === DealStatus.buy && preferences) || []}
      handleClick={handleClick}
      textFieldValue={(dealStatus === DealStatus.sail && 'Площадь, м²') || ''}
      handleChange={handleChange}
    />
  )
}
