import React, { useState } from 'react'
import { Section, StepWrapper, Title, Wrapper, StepTitle } from './quize.style'
import { Container } from '@/styles/container.style'
import { DualButtons } from '@/components/UI/DualButtons/DualButton'
import { DealStatus, steps_for_buying, steps_for_sailing } from './quize.utils'
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'

export default function Quize() {
  const [step, setStep] = useState(0)
  const [dealStatus, setDealStatus] = useState<DealStatus>(DealStatus.buy)

  const nextStep = () => {
    step < 5 && setStep((prev) => prev + 1)
  }
  const previousStep = () => {
    step > 0 && setStep((prev) => prev - 1)
  }

  return (
    <Section>
      <Container>
        <Title>Мы предоставим вам выгодное решение</Title>
        <Wrapper>
          <StepWrapper>
            <StepTitle>
              {step + 1}/6{' '}
              {dealStatus === DealStatus.sail
                ? steps_for_sailing.filter((item, index) => index === step)
                : steps_for_buying.filter((item, index) => index === step)}
            </StepTitle>
            <DualButtons leftClick={previousStep} rightClick={nextStep} />
          </StepWrapper>
          {step + 1 === 1 && (
            <Step1 setDealStatus={setDealStatus} nextStep={nextStep} />
          )}
          {step + 1 === 2 && (
            <Step2 dealStatus={dealStatus} nextStep={nextStep} />
          )}
          {step + 1 === 3 && (
            <Step3 dealStatus={dealStatus} nextStep={nextStep} />
          )}
        </Wrapper>
      </Container>
    </Section>
  )
}
