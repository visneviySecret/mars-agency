import React, { useEffect, useState } from 'react'
import {
  DealStatus,
  rent_types_to_buy,
  rent_types_to_sail,
} from '../quize.utils'
import { StepPattern } from './StepPattern'

interface IProps {
  dealStatus: DealStatus
  handleForm: (key: string, value: string[]) => void
}

export default function Step1({ dealStatus, handleForm }: IProps) {
  const [selected, setSelected] = useState<string[]>([])
  const title =
    dealStatus === DealStatus.buy
      ? '1. Какие объекты вы ищите?'
      : '1. Какой объект вы продаете?'

  const dictionaries =
    dealStatus === DealStatus.buy ? rent_types_to_buy : rent_types_to_sail

  const handleClick = (value: string) => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value])
      return
    }
    const result = selected.filter((item) => item !== value)
    setSelected(result)
  }

  useEffect(() => {
    handleForm(title, selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <StepPattern title={title} nodes={dictionaries} handleClick={handleClick} />
  )
}
