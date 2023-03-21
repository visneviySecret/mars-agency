import React, { useState } from 'react'
import {
  Section,
  LogoWrapper,
  Item,
  List,
  Wrapper,
  ButtonWrapper,
} from './Header.style'
import { Logo } from '@/assets/Logo'
import { useTheme } from 'next-themes'
import { Container } from '@/styles/container.style'
import Button from '@/components/UI/Button/Button'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpenModal, setisOpenModal] = useState(false)
  const isDarkMode = theme === 'dark'

  const navList = [
    { title: 'О нас', ancor: '#about-us' },
    { title: 'Услуги', ancor: '#offers' },
    { title: 'Отзывы', ancor: '#reviews' },
    { title: 'Партнёры', ancor: '#partners' },
    { title: 'Контакты', ancor: '#contacts' },
  ]

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

          <List>
            {navList.map((item, index) => (
              <Item key={index}>
                <a href={item.ancor}>{item.title}</a>
              </Item>
            ))}
          </List>

          <ButtonWrapper>
            <Button onClick={handleModal}> Обратный звонок</Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
      {isOpenModal}
    </Section>
  )
}
