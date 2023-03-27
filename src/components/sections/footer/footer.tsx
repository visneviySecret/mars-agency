import { Logo } from '@/assets/Logo'
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
  Wrapper,
  BottomLine,
  SocialWrapper,
} from './footer.style'
import { contacts } from './footer.utils'
import Navigation from '@/share/Navigation/Navigation'
import { Social } from '@/share/Social/Social'
import useMeasure from 'react-use-measure'

export default function Footer() {
  const [ref, { width, height }] = useMeasure()

  return (
    <Container id="footer">
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
          <SocialWrapper>
            <LogoWrapper ref={ref}>
              <Logo width={width} height={height} />
            </LogoWrapper>
            <Social />
          </SocialWrapper>
        </Wrapper>
        <BottomLine />
      </FooterWrapper>
    </Container>
  )
}
