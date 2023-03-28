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
import { breakPoints } from '@/utils/breakPoints'
import { useMediaQuery } from '@/hooks/useMedia'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'

const initialState = {
  name: '',
  phone: '',
}

export default function Form() {
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)
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
    <AnimationFadeIn delay={0.1}>
      <Section id="form">
        <Container isFlex={!isSmallScreen}>
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
                  <AnimationFadeIn delay={0.5}>
                    Оставьте заявку на бесплатную консультацию и мы свяжемся с
                    вами в ближайшее время
                  </AnimationFadeIn>
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
                <AnimationFadeIn delay={0.5}>
                  <Button onClick={handleClick}>Оставить заявку</Button>
                </AnimationFadeIn>
              </ButtonWrapper>
            </FormWrapper>
          </Wrapper>
        </Container>
      </Section>
    </AnimationFadeIn>
  )
}
