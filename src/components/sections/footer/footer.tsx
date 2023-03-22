import { LogoWhite } from '@/assets/Logo'
import { Container } from '@/components/UI/Container/container.style'
import React from 'react'
import {
  FooterWrapper,
  LogoWrapper,
  ColumnWrapper,
  Title,
  EmptyColumn,
  NavigationWrapper,
  Contacts,
  Contact,
  Name,
  Social,
  Wrapper,
  BottomLine,
  Icons,
} from './footer.style'
import { contacts, social } from './footer.utils'
import { useTheme } from 'next-themes'
import Navigation from '@/share/Navigation/Navigation'
import Link from 'next/link'

export default function Footer() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Container>
      <FooterWrapper>
        <Wrapper>
          <ColumnWrapper>
            <EmptyColumn />
            <NavigationWrapper>
              <Navigation />
            </NavigationWrapper>
          </ColumnWrapper>

          <Contacts>
            {contacts.map((contact) => (
              <Contact key={contact.name}>
                <Title>{contact.title}</Title>
                <Name>{contact.name}</Name>
              </Contact>
            ))}
          </Contacts>
          <Social>
            <LogoWrapper onClick={handleClick} isDarkMode={isDarkMode}>
              <LogoWhite />
            </LogoWrapper>
            <Icons>
              {social.map((item) => (
                <li key={item.title}>
                  <Link href={item.url}>{item.img()}</Link>
                </li>
              ))}
            </Icons>
          </Social>
        </Wrapper>
        <BottomLine />
      </FooterWrapper>
    </Container>
  )
}
