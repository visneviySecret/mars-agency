import React, { useState } from 'react'
import {
  Section,
  Title,
  Wrapper,
  ClosePanel,
  Header,
  Description,
} from './ModalQuize.style'
import { Container } from '@/components/UI/Container/container.style'
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'
import { DealStatus } from './quize.utils'
import Portal from '../Portal/Portal'
import { CrossIcon, CrossSize } from '@/components/UI/Cross/Cross'
import { Contacts } from '@/utils/consts'
import Step4 from './components/step4'
import Step5 from './components/step5'
import * as _ from 'lodash'

interface ModadProps {
  onClose: () => void
  dealStatus: DealStatus
}
export interface IField {
  [key: string]: string[] | { [key: string]: string }
}

function ModalQuize({ onClose, dealStatus }: ModadProps) {
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
  })
  const title =
    dealStatus === DealStatus.buy ? 'Купить объект' : 'Продать объект'

  const handleClose = () => {
    onClose()
    if (!_.isEmpty(form)) alert('Форма будет закрыта')
  }

  const submitForm = () => {
    const errorText = 'Это поле не может быть пустым'
    if (_.isEmpty(form)) {
      return setErrorMessage({
        name: errorText,
        phone: errorText,
      })
    }
    const isError = Object.values(form['5. Контактные данные']).map(
      (item, index) => {
        if (item === '') {
          const key = index === 1 ? 'name' : 'phone'
          setErrorMessage((prev) => ({
            ...prev,
            [key]: errorText || '',
          }))
          return true
        }
      },
    )
    if (isError.indexOf(true) !== -1) return
    alert('Отправляют форму')
  }

  const [form, setForm] = useState<IField>({})

  const handleForm = (
    key: string,
    value: string[] | { [key: string]: string },
  ) => {
    setErrorMessage({ name: '', phone: '' })
    if (_.isEmpty(value)) {
      const result = _.flow([
        Object.entries,
        (arr) =>
          arr.filter((title: string) => {
            return key !== title[0]
          }),
        Object.fromEntries,
      ])(form)
      setForm(result)
      return
    }
    const result = { ...form, [key]: value }
    setForm(result)
  }

  return (
    <Portal>
      <Section>
        <ClosePanel onClick={handleClose}>
          <CrossIcon size={CrossSize.big} isLightBackground />
        </ClosePanel>
        <Container>
          <Header>
            <Title>{title}</Title>
            <Description>
              Оставьте заявку, либо звоните, мы пообщаемся и сами все заполним:{' '}
              {Contacts.phone}
            </Description>
          </Header>
          <Wrapper>
            <Step1 dealStatus={dealStatus} handleForm={handleForm} />
            <Step2 dealStatus={dealStatus} handleForm={handleForm} />
            <Step3 dealStatus={dealStatus} handleForm={handleForm} />
            <Step4 dealStatus={dealStatus} handleForm={handleForm} />
            <Step5
              submitForm={submitForm}
              handleForm={handleForm}
              errorMessage={errorMessage}
            />
          </Wrapper>
        </Container>
      </Section>
    </Portal>
  )
}

export default ModalQuize
