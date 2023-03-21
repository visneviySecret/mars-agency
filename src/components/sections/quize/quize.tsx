import React, { useState } from 'react'
import { Section, StepWrapper, Title, Wrapper, StepTitle } from './quize.style'
import { Container } from '@/components/UI/container.style'
import { DealStatus, steps_for_buying, steps_for_sailing } from './quize.utils'
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'

export default function Quize() {
  const [dealStatus, setDealStatus] = useState<DealStatus>(DealStatus.buy)

  return (
    <Section>
      <Container>
        <Title>Мы предоставим вам выгодное решение</Title>
        <Wrapper>
          <StepWrapper>
            <StepTitle>{dealStatus}</StepTitle>
          </StepWrapper>
          <Step1 setDealStatus={setDealStatus} />
          <Step2 dealStatus={dealStatus} />
          <Step3 dealStatus={dealStatus} />
        </Wrapper>
      </Container>
    </Section>
  )
}
