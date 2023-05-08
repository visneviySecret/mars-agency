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
import picture from '/public/picture/form.png'
import ContactForm from '@/share/ContactForm/ContactForm'
import { breakPoints } from '@/utils/breakPoints'
import { useMediaQuery } from '@/hooks/useMedia'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'
import WarningForm from '@/components/Modals/WarningForm/WarningForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import {
  initialState,
  schema,
  FormValues,
  getFormattedData,
} from './form.utils'
import { useController } from 'react-hook-form'
import { sendMessageToTelegram } from '@/pages/api/sendMessageToTelegram'

export default function Form() {
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: initialState,
    mode: 'onSubmit',
  })
  const { field } = useController({ control, name: 'contacts' })
  const [isChecked, setIsChecked] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const onSubmit = (data: FormValues) => {
    if (!isChecked) return
    const formattedData = getFormattedData(data)
    sendMessageToTelegram(formattedData)
    setIsActive(true)
    reset()
  }

  const handleChange = (key: string, value: string) => {
    const result = { ...field.value, [key]: value }
    field.onChange(result)
  }

  return (
    <Section id="form">
      <Container isFlex={!isSmallScreen}>
        <Wrapper>
          <Image
            src={picture}
            alt="client"
            width={780}
            height={631}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Wrapper>

        <Wrapper>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Header>
              <Title>
                <AnimationFadeIn delay={0.5}>
                  Оставьте заявку на бесплатную консультацию и мы свяжемся с
                  вами в ближайшее время
                </AnimationFadeIn>
              </Title>
            </Header>

            <ContactForm
              value={field.value}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              errors={errors}
              onChange={handleChange}
              isLanding
            />
            <ButtonWrapper>
              <AnimationFadeIn delay={0.5}>
                <Button type="submit">Оставить заявку</Button>
              </AnimationFadeIn>
            </ButtonWrapper>
          </FormWrapper>
        </Wrapper>
      </Container>
      <WarningForm
        isActive={isActive}
        setIsActive={setIsActive}
        title={'Спасибо!'}
        content={
          'Ваша заявка отправлена! В ближайшее время мы свяжемся с вами.'
        }
        closingText={'Хорошо'}
      />
    </Section>
  )
}
