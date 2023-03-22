import React from 'react'
import { Section, Title, Wrapper, List, Partner } from './partners.style'
import { Container } from '@/components/UI/Container/container.style'
import { usePartners } from './partners.utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Partners() {
  const {
    bankCount,
    developCount,
    handleBankCount,
    handleDevelopCount,
    handleMouseEnter,
    handleMouseLeave,
    getBankImg,
    getDevImg,
  } = usePartners()

  return (
    <Section id="partners">
      <Container>
        <Wrapper>
          <Partner
            onClick={handleBankCount}
            onMouseEnter={() => handleMouseEnter('bank')}
            onMouseLeave={handleMouseLeave}
          >
            <Title>партнеры</Title>
            <List>
              <motion.div
                key={bankCount}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
              >
                <Image src={getBankImg()} alt="bank" width={300} height={80} />
              </motion.div>
            </List>
          </Partner>
          <Partner
            onClick={handleDevelopCount}
            onMouseEnter={() => handleMouseEnter('developer')}
            onMouseLeave={handleMouseLeave}
          >
            <Title>Застройщики</Title>
            <List>
              <motion.li
                key={developCount}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
              >
                <Image
                  src={getDevImg()}
                  alt="developer"
                  width={300}
                  height={80}
                />
              </motion.li>
            </List>
          </Partner>
        </Wrapper>
      </Container>
    </Section>
  )
}
