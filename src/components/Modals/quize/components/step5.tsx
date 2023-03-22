import Button from '@/components/UI/Button/Button'
import { Theme } from '@/components/UI/Button/Button.utils'
import ContactForm from '@/share/ContactForm/ContactForm'
import { indents } from '@/utils/indents'
import React, { useState } from 'react'
import { StepPattern } from './StepPattern'

const initialState = {
  name: '',
  phone: '',
}

export default function Step5() {
  const [form] = useState(initialState)
  const [isChecked, setIsChecked] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const handleClick = () => {
    console.log(form)
  }

  return (
    <StepPattern title="5. Контактные данные">
      <>
        <ContactForm
          form={form}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleChange={handleChange}
          isQuize
        />
        <Button
          onClick={handleClick}
          style={{ marginTop: indents.indent40 }}
          customTheme={Theme.coral}
        >
          Оставить заявку
        </Button>
      </>
    </StepPattern>
  )
}
