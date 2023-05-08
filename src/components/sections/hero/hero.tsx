import React, { useState } from 'react'
import {
  Section,
  Title,
  ButtonsWrapper,
  TitleWrapper,
  HideOverflow,
} from './hero.style'
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
import HeroImg from '/public/Hero.png'
import HeroNightImg from '/public/HeroNight.png'

const customButtonStyle = { flex: 1, width: '100%' }

export default function Hero() {
  const [isOpenBuy, setIsOpenBuy] = useState(false)
  const [isOpenSail, setIsOpenSail] = useState(false)
  const { theme } = useTheme()
  const picture = theme === Theme.light ? HeroImg : HeroNightImg

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
    <HideOverflow>
      <Container>
        <Section>
          <TitleWrapper>
            <AnimationMaskText delay={0.5}>
              <Title>Агентство недвижимости</Title>
            </AnimationMaskText>
            <AnimationMaskText delay={0.6}>
              <Title>с космическим сервисом</Title>
            </AnimationMaskText>
          </TitleWrapper>
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
              width={2560}
              height={1560}
              style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: '45% 0%',
                height: 'clamp(375px, 50vw, 560px)',
              }}
              priority
            />
          </AnimationFadeIn>
        </Section>
      </Container>
      <BuyModal isActive={isOpenBuy} onClose={onClose} />
      <SailModal isActive={isOpenSail} onClose={onClose} />
    </HideOverflow>
  )
}
