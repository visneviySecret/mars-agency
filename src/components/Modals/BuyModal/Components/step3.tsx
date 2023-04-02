import ChipList from '@/share/ChipList/ChipList'
import React from 'react'
import { FormValues } from '../BuyModal.types'
import { useController } from 'react-hook-form'
import { preferences } from './quize.utils'
import { StepPattern } from './StepPattern'
import { Control } from 'react-hook-form/dist/types/form'

interface IProps {
  name: 'preferences'
  control: Control<FormValues>
}

export default function Step3({ control, name }: IProps) {
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
    <StepPattern title={'3. Что для вас важнее всего?'}>
      <ChipList
        nodes={preferences}
        selectNode={handleAdd}
        selected={field.value}
      />
    </StepPattern>
  )
}
