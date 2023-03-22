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

  const handleClick = () => {
    if (!isChecked) return
    console.log(form)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [e.target.name]: value }))
  }

  return (
    <Section>
      <Container isFlex={true}>
        <Wrapper>
          <Image
            src={'/picture/form.png'}
            alt="client"
            width={780}
            height={631}
            style={{ height: '100%', width: '100%' }}
          />
        </Wrapper>

        <Wrapper isPadding>
          <Header>
            <Title>
              Оставьте заявку на бесплатную консультацию и мы свяжемся с вами в
              ближайшее время
            </Title>
          </Header>

          <FormWrapper>
            <ContactForm
              form={form}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              handleChange={handleChange}
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
