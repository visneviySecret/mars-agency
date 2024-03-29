import React from 'react'
import { Section, Title, Wrapper, List, Partner } from './partners.style'
import { Container } from '@/components/UI/Container/container.style'
import { usePartners } from './partners.utils'
// import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import CursorHandler from './components/CursorHandler'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'

export default function Partners() {
  const {
    ref,
    width,
    theme,
    bankCount,
    devDirection,
    bankDirection,
    developCount,
    handleBankCount,
    handleDevelopCount,
    handleMouseEnter,
    handleMouseLeave,
    isSmallScreen,
    bankVariants,
    devVariants,
    getBankImg,
    getDevImg,
  } = usePartners()

  return (
    <Section id="partners">
      <Container>
        <Wrapper>
          <Partner
            onMouseEnter={() => handleMouseEnter('bank')}
            onMouseLeave={handleMouseLeave}
            theme={theme}
          >
            <CursorHandler
              onClick={handleBankCount}
              isSmallScreen={isSmallScreen}
            />
            <Title>
              <AnimationFadeIn>партнеры</AnimationFadeIn>
            </Title>
            <List theme={theme} ref={ref}>
              <AnimatePresence custom={{ bankDirection, width }}>
                <motion.div
                  key={bankCount}
                  variants={bankVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={{ bankDirection, width }}
                  transition={{ bounce: 0 }}
                >
                  <img
                    src={getBankImg()}
                    alt="bank"
                    width={300}
                    height={80}
                    style={{
                      objectFit: 'contain',
                      position: 'absolute',
                      display: 'flex',
                      width: width,
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </List>
          </Partner>
          <Partner
            onMouseEnter={() => handleMouseEnter('developer')}
            onMouseLeave={handleMouseLeave}
            theme={theme}
          >
            <CursorHandler
              onClick={handleDevelopCount}
              isSmallScreen={isSmallScreen}
            />
            <Title
              style={{
                paddingLeft: (!isSmallScreen && '20px') || '',
              }}
            >
              <AnimationFadeIn>Застройщики</AnimationFadeIn>
            </Title>
            <List theme={theme}>
              <AnimatePresence custom={{ devDirection, width }}>
                <motion.li
                  key={developCount}
                  variants={devVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={{ devDirection, width }}
                  transition={{ bounce: 0 }}
                >
                  <img
                    src={getDevImg()}
                    alt="developer"
                    width={300}
                    height={80}
                    style={{
                      objectFit: 'contain',
                      position: 'absolute',
                      width: width,
                    }}
                  />
                </motion.li>
              </AnimatePresence>
            </List>
          </Partner>
        </Wrapper>
      </Container>
    </Section>
  )
}
