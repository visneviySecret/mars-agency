import PersonalAgreement from '@/components/sections/form/component/PersonalAgreement'
import TextField from '@/components/UI/TextField/TextField'
import { indents } from '@/utils/indents'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  form: { [key: string]: string }
  isChecked: boolean
  setIsChecked: (val: boolean) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${indents.indent35};
`

function ContactForm({ form, isChecked, setIsChecked, handleChange }: IProps) {
  return (
    <Wrapper>
      {' '}
      <TextField
        name="name"
        placeholder="ИМЯ"
        onChange={handleChange}
        value={form.name}
      />
      <TextField
        name="phone"
        placeholder="ТЕЛЕФОН"
        onChange={handleChange}
        value={form.phone}
        errorMessage={''}
      />
      <PersonalAgreement isChecked={isChecked} setIsChecked={setIsChecked} />
    </Wrapper>
  )
}

export default ContactForm
