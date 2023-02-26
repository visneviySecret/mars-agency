import React, { useState } from 'react'
import { Section, ImageWrapper, Title, Wrapper } from './hero.style'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import { Container } from '../../styles/container.style'

export default function Hero() {
  const [isModalActive, setIsModalActive] = useState(false)

  const handleClick = () => {
    setIsModalActive((prev) => !prev)
  }

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Агентство недвижимости с космическим сервисом</Title>
          <Button onClick={handleClick}>Оставить заявку</Button>
        </Wrapper>
        {isModalActive && <form>Hello!</form>}
      </Container>
      <ImageWrapper>
        <Image
          alt="Backround buildings image"
          src={'/Hero.png'}
          width={100}
          height={100}
          style={{ width: '100%', minHeight: '40rem' }}
        />
      </ImageWrapper>
    </Section>
  )
}
