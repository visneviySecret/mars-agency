import React, { useState } from 'react'
import { Section, LogoWrapper, Wrapper, ButtonWrapper } from './Header.style'
import { Logo } from '@/assets/Logo'
import { useTheme } from 'next-themes'
import { Container } from '@/components/UI/Container/container.style'
import Button from '@/components/UI/Button/Button'
import Navigation from '@/share/Navigation/Navigation'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpenModal, setisOpenModal] = useState(false)
  const isDarkMode = theme === 'dark'

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleModal = () => {
    setisOpenModal((prev) => !prev)
  }

  return (
    <Section>
      <Container>
        <Wrapper>
          <LogoWrapper isDarkMode={isDarkMode} onClick={handleClick}>
            <Logo />
          </LogoWrapper>

          <Navigation />

          <ButtonWrapper>
            <Button onClick={handleModal}> Обратный звонок</Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
      {isOpenModal}
    </Section>
  )
}
