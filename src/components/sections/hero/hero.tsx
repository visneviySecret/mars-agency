import React, { useState } from 'react'
import { Section, Title, ButtonsWrapper } from './hero.style'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import { Container } from '@/components/UI/Container/container.style'
import { Theme } from '@/components/UI/Button/Button.utils'
import ModalQuize from '@/components/Modals/quize/ModalQuize'
import { DealStatus } from '@/components/Modals/quize/quize.utils'

const customButtonStyle = { flex: 1, width: '100%' }

export default function Hero() {
  const [dealStatus, setDealStatus] = useState<DealStatus>(DealStatus.buy)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (status: DealStatus) => {
    openModal(status)
  }

  const openModal = (status: DealStatus) => {
    setIsModalOpen(true)
    setDealStatus(status)
  }

  const onClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Section>
        <Container>
          <Title>Агентство недвижимости с космическим сервисом</Title>
          <ButtonsWrapper>
            <Button
              onClick={() => handleClick(DealStatus.buy)}
              customTheme={Theme.coral}
              style={customButtonStyle}
            >
              Купить
            </Button>
            <Button
              onClick={() => handleClick(DealStatus.sail)}
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
      {isModalOpen && <ModalQuize onClose={onClose} dealStatus={dealStatus} />}
    </>
  )
}
