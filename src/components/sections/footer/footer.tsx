import { Logo } from '@/assets/Logo'
import { Container } from '@/components/UI/container.style'
import React from 'react'
import {
  LogoWrapper,
  Column,
  ColumnWrapper,
  Item,
  PolitWrapper,
  Text,
  Title,
} from './footer.style'
import { contacts, navigation, social } from './footer.utils'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  const year = new Date().getFullYear()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container>
      <ColumnWrapper>
        <Column>
          <LogoWrapper onClick={handleClick} isDarkMode={isDarkMode}>
            <Logo />
          </LogoWrapper>
        </Column>
        <Column>
          <Title>{navigation.title}</Title>
          {navigation.items.map((item, index) => (
            <Item key={index} href={item.ancor}>
              {item.title}
            </Item>
          ))}
        </Column>
        <Column>
          <Title>{contacts.title}</Title>
          {contacts.items.map((item, index) => (
            <Item key={index}>{item.title}</Item>
          ))}
        </Column>
        <Column>
          <Title>{social.title}</Title>
          {social.items.map((item, index) => (
            <Item key={index} href={item.url}>
              {item.title}
            </Item>
          ))}
        </Column>
      </ColumnWrapper>
      <PolitWrapper>
        <Text>Политика конфиденциальности</Text>
        <Text>2023 {year !== 2023 && `- ${year}`}</Text>
      </PolitWrapper>
    </Container>
  )
}
