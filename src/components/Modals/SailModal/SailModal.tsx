import { Container } from '@/components/UI/Container/container.style'
import { CrossIcon, CrossSize } from '@/components/UI/Cross/Cross'
import Portal from '@/share/Portal/Portal'
import { Contacts } from '@/utils/consts'
import { Theme } from '@/utils/helpers/getThemeColors'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  ClosePanel,
  Description,
  Header,
  Section,
  Title,
  Wrapper,
} from './SailModal.style'
import Step1 from './Components/Step1'
import Step2 from './Components/step2'
import Step3 from './Components/step3'
import Step4 from './Components/step4'
import Step5 from './Components/step5'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormValues, ModalProps } from './SailModal.types'
import { defaultValues, getFormattedData, schema } from './SailModal.utils'
import { sendMessageToTelegram } from '@/pages/api/sendMessageToTelegram'
import WarningForm from '../WarningForm/WarningForm'

function SailModal({ isActive, onClose }: ModalProps) {
  const [isActiveWarning, setIsActiveWarning] = useState(false)
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
    mode: 'onSubmit',
  })
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark

  const onSubmit = (data: FormValues) => {
    const formattedData = getFormattedData(data)
    sendMessageToTelegram(formattedData)
    setIsActiveWarning(true)
    onClose()
    reset()
  }

  return (
    <Portal isActive={isActive}>
      <Section isDarkMode={isDarkMode}>
        <ClosePanel isDarkMode={isDarkMode} onClick={onClose}>
          <CrossIcon size={CrossSize.big} isDarkMode={!isDarkMode} />
        </ClosePanel>
        <Container>
          <Header>
            <Title>Купить объект</Title>
            <Description>
              Оставьте заявку, либо звоните, мы пообщаемся и сами все заполним:{' '}
              {Contacts.phone}
            </Description>
          </Header>
          <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Step1 control={control} name="objects" />
            <Step2 control={control} name="locations" />
            <Step3 control={control} name="area" />
            <Step4 control={control} name="time" />
            <Step5 control={control} name="contacts" errors={errors} />
          </Wrapper>
        </Container>
      </Section>
      <WarningForm
        title="Спасибо!"
        closingText="Хорошо"
        content="Ваша заявка отправлена! В ближайшее время мы свяжемся с вами."
        isActive={isActiveWarning}
        setIsActive={setIsActiveWarning}
      />
    </Portal>
  )
}

export default SailModal
