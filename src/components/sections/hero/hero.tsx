import React, { useState } from 'react'
import { Section, Title, ButtonsWrapper } from './hero.style'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import { Container } from '@/components/UI/Container/container.style'
import { Theme } from '@/components/UI/Button/Button.utils'
import { blockScroll, unlockScroll } from './utils'
import { useTheme } from 'next-themes'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'
import BuyModal from '@/components/Modals/BuyModal/BuyModal'
import SailModal from '@/components/Modals/SailModal/SailModal'
import { SplitText } from '@/share/Animation/AnimationSplitText'
import { AnimatePresence, motion } from 'framer-motion'

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
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SplitText
                  initial={{ y: '100%' }}
                  animate="visible"
                  variants={{
                    visible: (i: number) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                  }}
                >
                  Агентство недвижимости с космическим сервисом
                </SplitText>
              </motion.div>
            </AnimatePresence>
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
