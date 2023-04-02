import React from 'react'
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
import Portal from '../../../share/Portal/Portal'
import { CrossIcon, CrossSize } from '@/components/UI/Cross/Cross'
import { Contacts } from '@/utils/consts'
import Step4 from './components/step4'
import Step5 from './components/step5'
import useQuize from './useQuize'
import WarningForm from '../WarningForm/WarningForm'

interface ModadProps {
  isActive: boolean
  onClose: () => void
  dealStatus: DealStatus
}
export interface IField {
  [key: string]: string[] | { [key: string]: string }
}

function ModalQuize({ isActive, onClose, dealStatus }: ModadProps) {
  const {
    title,
    isDarkMode,
    handleClose,
    handleForm,
    submitForm,
    errorMessage,
    isActiveWarning,
    setIsActiveWarning,
  } = useQuize({
    dealStatus,
    onClose,
  })

  return (
    <Portal isActive={isActive}>
      <Section isDarkMode={isDarkMode}>
        <ClosePanel isDarkMode={isDarkMode} onClick={handleClose}>
          <CrossIcon size={CrossSize.big} isDarkMode={!isDarkMode} />
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
      <WarningForm
        title="несохраненные изменения"
        closingText="вернуться"
        content="Вы уверены, что хотите закрыть форму? Изменения не будут сохранены."
        onClose={onClose}
        isActive={isActiveWarning}
        setIsActive={setIsActiveWarning}
      />
    </Portal>
  )
}

export default ModalQuize
