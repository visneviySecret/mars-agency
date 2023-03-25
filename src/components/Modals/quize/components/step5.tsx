import Button from '@/components/UI/Button/Button'
import { Theme } from '@/components/UI/Button/Button.utils'
import ContactForm from '@/share/ContactForm/ContactForm'
import { indents } from '@/utils/indents'
import React, { useEffect, useState } from 'react'
import { StepPattern } from './StepPattern'

interface IProps {
  handleForm: (title: string, value: { [key: string]: string }) => void
  submitForm: () => void
  errorMessage?: { name: string; phone: string }
}

export default function Step5({
  handleForm,
  submitForm,
  errorMessage,
}: IProps) {
  const [contacts, setContacts] = useState({})
  const [isChecked, setIsChecked] = useState(true)

  const title = '5. Контактные данные'

  const handleChange = (key: string, value: string) => {
    setContacts({ ...contacts, [key]: value })
  }

  const handleClick = () => {
    submitForm()
  }

  useEffect(() => {
    handleForm(title, contacts)
  }, [contacts])

  return (
    <StepPattern title={title}>
      <>
        <ContactForm
          form={contacts}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleChange={handleChange}
          errorMessage={errorMessage}
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
