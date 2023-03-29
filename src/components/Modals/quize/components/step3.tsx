import React, { useEffect, useState } from 'react'
import { DealStatus, preferences } from '../quize.utils'
import { StepPattern } from './StepPattern'

interface IProps {
  dealStatus: string
  handleForm: (key: string, value: string[]) => void
}

export default function Step3({ dealStatus, handleForm }: IProps) {
  const [areas, setAreas] = useState<string[]>([])
  const [area, setArea] = useState('')

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

  const handleChange = (key: string, value: string) => {
    setArea(value)
  }

  useEffect(() => {
    if (area) return handleForm(title, [area])
    handleForm(title, areas)
    // eslint-disable-next-line
  }, [areas, area])

  return (
    <StepPattern
      title={title}
      name={'area'}
      placeholder={(dealStatus === DealStatus.sail && 'Площадь, м²') || ''}
      textFieldValue={(dealStatus === DealStatus.sail && area) || ''}
      nodes={(dealStatus === DealStatus.buy && preferences) || []}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  )
}
