import PersonalAgreement from '@/components/sections/form/component/PersonalAgreement'
import TextField from '@/components/UI/TextField/TextField'
import { indents } from '@/utils/indents'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  form: { [key: string]: string }
  isChecked: boolean
  setIsChecked: (val: boolean) => void
  handleChange: (key: string, value: string) => void
  isQuize?: boolean
  isLanding?: boolean
  errorMessage?: { name: string; phone: string }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(${indents.indent10}, 4.4vw, ${indents.indent35});
`

function ContactForm({
  form,
  isChecked,
  setIsChecked,
  handleChange,
  isQuize,
  isLanding,
  errorMessage,
}: IProps) {
  return (
    <Wrapper>
      <TextField
        name="name"
        placeholder="ИМЯ"
        onChange={handleChange}
        value={form.name}
        errorMessage={errorMessage?.name || ''}
        isQuize={isQuize}
      />
      <TextField
        name="phone"
        type="tel"
        placeholder="ТЕЛЕФОН"
        onChange={handleChange}
        value={form.phone}
        errorMessage={errorMessage?.phone || ''}
        isQuize={isQuize}
      />
      <PersonalAgreement
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isLanding={isLanding}
      />
    </Wrapper>
  )
}

export default ContactForm
