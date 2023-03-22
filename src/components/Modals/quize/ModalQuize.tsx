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
import Portal from '../Portal/Portal'
import { CrossIcon, CrossSize } from '@/components/UI/Cross/Cross'
import { Contacts } from '@/utils/consts'

interface ModadProps {
  onClose: () => void
  dealStatus: DealStatus
}

function ModalQuize({ onClose, dealStatus }: ModadProps) {
  const title =
    dealStatus === DealStatus.buy ? 'Купить объект' : 'Продать объект'

  return (
    <Portal>
      <Section>
        <ClosePanel onClick={onClose}>
          <CrossIcon size={CrossSize.big} />
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
            <Step1 dealStatus={dealStatus} />
            <Step2 dealStatus={dealStatus} />
            <Step3 dealStatus={dealStatus} />
          </Wrapper>
        </Container>
      </Section>
    </Portal>
  )
}

export default ModalQuize
