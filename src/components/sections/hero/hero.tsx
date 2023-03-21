import React, { useState } from 'react'
import { Section, Title, ButtonsWrapper } from './hero.style'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import { Container } from '@/styles/container.style'
import { Theme } from '@/components/UI/Button/Button.utils'

const customButtonStyle = { flex: 1, width: '100%' }

export default function Hero() {
  const [isModalActive, setIsModalActive] = useState(false)

  const handleClick = () => {
    setIsModalActive((prev) => !prev)
  }

  return (
    <>
      <Section>
        <Container>
          <Title>Агентство недвижимости с космическим сервисом</Title>
          <ButtonsWrapper>
            <Button
              onClick={handleClick}
              customTheme={Theme.coral}
              style={customButtonStyle}
            >
              Купить
            </Button>
            <Button
              onClick={handleClick}
              customTheme={Theme.coral}
              style={customButtonStyle}
            >
              Продать
            </Button>
          </ButtonsWrapper>
          <Image
            alt="City wallpaper"
            src={'/Hero.png'}
            width={1560}
            height={560}
            style={{ width: '100%', height: 'auto' }}
          />
        </Container>
      </Section>
      {isModalActive && <form></form>}
    </>
  )
}
