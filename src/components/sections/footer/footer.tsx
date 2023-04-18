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
  CopyWriteText,
  BottomWrapper,
} from './footer.style'
import { contacts } from './footer.utils'
import Navigation from '@/share/Navigation/Navigation'
import { Social } from '@/share/Social/Social'
import useMeasure from 'react-use-measure'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'
import Link from 'next/link'

export default function Footer() {
  const [ref, { width, height }] = useMeasure()
  const date = new Date().getFullYear()
  const displayedDate = date !== 2023 ? ` - ${date}` : ''

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
                <Title>
                  <AnimationFadeIn>{contact.title}</AnimationFadeIn>
                </Title>
                <Name>
                  <AnimationFadeIn>{contact.name}</AnimationFadeIn>
                </Name>
              </Contact>
            ))}
          </Contacts>
          <SocialWrapper>
            <LogoWrapper ref={ref}>
              <AnimationFadeIn>
                <Logo width={width} height={height} />
              </AnimationFadeIn>
            </LogoWrapper>
            <Social />
          </SocialWrapper>
        </Wrapper>
        <BottomLine />
        <Wrapper>
          <BottomWrapper>
            <AnimationFadeIn>
              <CopyWriteText>© ООО «Марс», 2023{displayedDate}</CopyWriteText>
            </AnimationFadeIn>
            <AnimationFadeIn>
              <CopyWriteText>
                <Link
                  href={'https://www.behance.net/anvlagord'}
                  target="_blank"
                >
                  Anna Gordeiko
                </Link>{' '}
                &{' '}
                <Link href={'https://www.uprock.pro/'} target="_blank">
                  uprock agency
                </Link>
              </CopyWriteText>
            </AnimationFadeIn>
          </BottomWrapper>
        </Wrapper>
      </FooterWrapper>
    </Container>
  )
}
