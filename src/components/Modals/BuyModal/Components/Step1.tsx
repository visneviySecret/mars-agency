import React from 'react'
import ChipList from '@/share/ChipList/ChipList'
import { rent_types_to_buy } from '../../quize/quize.utils'
import { useController } from 'react-hook-form'
import { StepPattern } from './StepPattern'
import { FormValues } from '../BuyModal.types'
import { Control } from 'react-hook-form/dist/types/form'

interface IProps {
  name: 'objects'
  control: Control<FormValues>
}

export default function Step1({ name, control }: IProps) {
  const { field } = useController({ control, name })

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
    <StepPattern title={'1. Какие объекты вы ищите?'}>
      <ChipList
        nodes={rent_types_to_buy}
        selectNode={handleAdd}
        selected={field.value}
      />
    </StepPattern>
  )
}
