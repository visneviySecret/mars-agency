import React, { useState } from 'react'
import Button from '@/components/UI/Button/Button'
import { Theme } from '@/components/UI/Button/Button.utils'
import ContactForm from '@/share/ContactForm/ContactForm'
import { indents } from '@/utils/indents'
import { FieldErrors } from 'react-hook-form'
import { StepPattern } from './StepPattern'
import { Control } from 'react-hook-form/dist/types/form'
import { FormValues } from '../SailModal.types'
import { useController } from 'react-hook-form'

export interface FormProps {
  name: 'contacts'
  control: Control<FormValues>
  errors?: FieldErrors<FormValues>
  onSubmit?: () => void
}

export default function Step5({ name, control, errors, onSubmit }: FormProps) {
  const [isChecked, setIsChecked] = useState(true)
  const { field } = useController({ control, name })
  const title = '5. Контактные данные'

  const handleChange = (key: string, value: string) => {
    const result = { ...field.value, [key]: value }
    field.onChange(result)
  }

  return (
    <StepPattern title={title}>
      <ContactForm
        value={field.value}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        errors={errors}
        onChange={handleChange}
        isQuize
      />
      <Button
        onClick={onSubmit}
        style={{ marginTop: indents.indent40 }}
        customTheme={Theme.coral}
        type="submit"
      >
        Оставить заявку
      </Button>
    </StepPattern>
  )
}
