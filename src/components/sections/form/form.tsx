import React, { useState } from 'react'
import {
  Section,
  Title,
  ButtonWrapper,
  Header,
  Wrapper,
  FormWrapper,
} from './form.style'
import { Container } from '@/components/UI/Container/container.style'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import ContactForm from '@/share/ContactForm/ContactForm'

const initialState = {
  name: '',
  phone: '',
}

export default function Form() {
  const [form, setForm] = useState(initialState)
  const [isChecked, setIsChecked] = useState(true)
  const [errorMessage, setErrorMessage] = useState(initialState)

  const handleClick = () => {
    if (!isChecked) return
    if (form.name !== '' && form.phone !== '') return alert(form)
    const errorText = 'Это поле не может быть пустым'
    setErrorMessage({
      name: (form.name === '' && errorText) || '',
      phone: (form.phone === '' && errorText) || '',
    })
  }

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrorMessage((prev) => ({ ...prev, [key]: '' }))
  }

  return (
    <Section id="form">
      <Container isFlex={true}>
        <Wrapper>
          <Image
            src={'/picture/form.png'}
            alt="client"
            width={780}
            height={631}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Wrapper>

        <Wrapper>
          <FormWrapper>
            <Header>
              <Title>
                Оставьте заявку на бесплатную консультацию и мы свяжемся с вами
                в ближайшее время
              </Title>
            </Header>

            <ContactForm
              form={form}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              handleChange={handleChange}
              errorMessage={errorMessage}
              isLanding
            />
            <ButtonWrapper>
              <Button onClick={handleClick}>Оставить заявку</Button>
            </ButtonWrapper>
          </FormWrapper>
        </Wrapper>
      </Container>
    </Section>
  )
}
