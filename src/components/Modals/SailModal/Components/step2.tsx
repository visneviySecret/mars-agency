import Selector from '@/components/UI/Selector/Selector'
import ChipList from '@/share/ChipList/ChipList'
import React from 'react'
import { locations } from '../../quize/quize.utils'
import { FormValues } from '../SailModal.types'
import { useController } from 'react-hook-form'
import { StepPattern } from './StepPattern'
import { Control } from 'react-hook-form/dist/types/form'

interface IProps {
  name: 'locations'
  control: Control<FormValues>
}

export default function Step2({ name, control }: IProps) {
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
    <StepPattern title={'2. В каком районе?'}>
      <Selector
        options={locations}
        setStash={handleAdd}
        selected={field.value}
      />
      <ChipList
        nodes={field.value}
        selectNode={(value: string) => handleDeleteNode(value)}
        selected={field.value}
      />
    </StepPattern>
  )
}
