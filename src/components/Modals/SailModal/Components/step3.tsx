import React from 'react'
import { FormValues } from '../SailModal.types'
import { useController } from 'react-hook-form'
import { StepPattern } from './StepPattern'
import { Control } from 'react-hook-form/dist/types/form'
import TextField from '@/components/UI/TextField/TextField'

interface IProps {
  name: 'area'
  control: Control<FormValues>
}

export default function Step3({ control, name }: IProps) {
  const { field } = useController({
    control,
    name,
  })

  const handleChange = (key: string, value: string) => {
    const result = [value]
    field.onChange(result)
  }

  return (
    <StepPattern title={'3. Укажите площадь недвижимости'}>
      <TextField
        type="tel"
        name="number"
        onChange={handleChange}
        placeholder="Площадь, м²"
        value={field.value[0]}
        isQuize={true}
      />
    </StepPattern>
  )
}
