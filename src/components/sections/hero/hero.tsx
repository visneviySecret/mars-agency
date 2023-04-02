import React, { useState } from 'react'
import { Section, Title, ButtonsWrapper } from './hero.style'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import { Container } from '@/components/UI/Container/container.style'
import { Theme } from '@/components/UI/Button/Button.utils'
import { blockScroll, unlockScroll } from './utils'
import { useTheme } from 'next-themes'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'
import AnimationMaskText from '@/share/Animation/AnimationMaskText'
import BuyModal from '@/components/Modals/BuyModal/BuyModal'
import SailModal from '@/components/Modals/SailModal/SailModal'

const customButtonStyle = { flex: 1, width: '100%' }

export default function Hero() {
  const [isOpenBuy, setIsOpenBuy] = useState(false)
  const [isOpenSail, setIsOpenSail] = useState(false)
  const { theme } = useTheme()
  const picture = theme === Theme.light ? '/Hero.png' : '/HeroNight.png'

  const handleBuyBlank = () => {
    blockScroll()
    setIsOpenBuy(true)
  }
  const handleSailBlank = () => {
    blockScroll()
    setIsOpenSail(true)
  }

  const onClose = () => {
    setIsOpenBuy(false)
    setIsOpenSail(false)
    unlockScroll()
  }

  return (
    <>
      <Container>
        <Section>
          <Title>
            <AnimationMaskText delay={0.5}>
              Агентство недвижимости
            </AnimationMaskText>
            <AnimationMaskText delay={0.6}>
              с космическим сервисом
            </AnimationMaskText>
          </Title>
          <ButtonsWrapper>
            <AnimationFadeIn style={customButtonStyle} delay={1}>
              <Button onClick={handleBuyBlank} customTheme={Theme.coral} isBig>
                Купить
              </Button>
            </AnimationFadeIn>
            <AnimationFadeIn style={customButtonStyle} delay={1}>
              <Button onClick={handleSailBlank} customTheme={Theme.coral} isBig>
                Продать
              </Button>
            </AnimationFadeIn>
          </ButtonsWrapper>
          <AnimationFadeIn delay={1.5}>
            <Image
              alt="City wallpaper"
              src={picture}
              width={1560}
              height={560}
              style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: '47%',
                height: 'clamp(375px, 50vw, 560px)',
              }}
            />
          </AnimationFadeIn>
        </Section>
      </Container>
      <BuyModal isActive={isOpenBuy} onClose={onClose} />
      <SailModal isActive={isOpenSail} onClose={onClose} />
    </>
  )
}
