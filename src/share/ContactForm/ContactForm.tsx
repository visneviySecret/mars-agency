import PersonalAgreement from '@/components/sections/form/component/PersonalAgreement'
import TextField from '@/components/UI/TextField/TextField'
import { indents } from '@/utils/indents'
import React from 'react'
import styled from 'styled-components'
import { FieldErrors } from 'react-hook-form'
import {
  FormContacts,
  FormValues,
} from '../../components/Modals/BuyModal/BuyModal.types'

interface IProps {
  value: FormContacts
  isChecked: boolean
  onChange: (key: string, value: string) => void
  setIsChecked: (val: boolean) => void
  isQuize?: boolean
  isLanding?: boolean
  errors?: FieldErrors<FormValues>
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(${indents.indent10}, 4.4vw, ${indents.indent35});
`

function ContactForm({
  value,
  isChecked,
  setIsChecked,
  onChange,
  isQuize,
  isLanding,
  errors,
}: IProps) {
  return (
    <Wrapper>
      <TextField
        name="name"
        value={value?.name}
        placeholder={'Введите имя'}
        onChange={onChange}
        errorMessage={errors?.contacts?.name?.message}
        isQuize={isQuize}
      />
      <TextField
        type="tel"
        name="phone"
        value={value?.phone}
        placeholder={'Введите номер'}
        onChange={onChange}
        errorMessage={errors?.contacts?.phone?.message}
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
