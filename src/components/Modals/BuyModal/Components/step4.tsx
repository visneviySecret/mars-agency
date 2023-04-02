import ChipList from '@/share/ChipList/ChipList'
import React from 'react'
import { cost_range } from './quize.utils'
import { FormValues } from '../BuyModal.types'
import { useController } from 'react-hook-form'
import { StepPattern } from './StepPattern'

import { Control } from 'react-hook-form/dist/types/form'

interface IProps {
  name: 'cost'
  control: Control<FormValues>
}

export default function Step4({ control, name }: IProps) {
  const { field } = useController({
    control,
    name,
  })

  const handleAdd = (value: string) => {
    if (field.value.indexOf(value) === -1) {
      const result = [...field.value, value]
      field.onChange(result)
      return
    }
    handleDeleteNode(value)
  }

  const handleDeleteNode = (value: string) => {
    const result = field.value.filter((item: string) => item !== value)
    field.onChange(result)
  }

  return (
    <StepPattern title={'4. Желаемая стоимость'}>
      <ChipList
        nodes={cost_range}
        selectNode={handleAdd}
        selected={field.value}
      />
    </StepPattern>
  )
}
