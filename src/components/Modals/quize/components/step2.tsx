import React, { useEffect, useState } from 'react'
import { DealStatus, locations } from '../quize.utils'
import { StepPattern } from './StepPattern'

interface IProps {
  dealStatus: DealStatus
  handleForm: (key: string, value: string[]) => void
}

export default function Step2({ dealStatus, handleForm }: IProps) {
  const [areas, setAreas] = useState<string[]>([])
  const title =
    dealStatus === DealStatus.buy ? '2. В каких районах?' : '2. В каком районе?'

  const dictionaries = locations

  const handleClick = (value: string) => {
    if (areas.indexOf(value) === -1) {
      const result = [...areas, value]
      setAreas(result)
      return
    }
    const result = areas.filter((item) => item !== value)
    setAreas(result)
  }

  useEffect(() => {
    handleForm(title, areas)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areas])

  return (
    <StepPattern
      title={title}
      nodes={areas}
      dictionaries={dictionaries}
      handleClick={handleClick}
      dealStatus={dealStatus}
      isSelector
      isActiveNode
    />
  )
}
