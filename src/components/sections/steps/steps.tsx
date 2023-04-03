import React from 'react'
import {
  Section,
  Title,
  Wrapper,
  Card,
  CardTitle,
  List,
  Content,
  DesciptionList,
  DesciptionItem,
  Header,
  ImageWrapper,
  CardContent,
} from './steps.style'
import { Container } from '@/components/UI/Container/container.style'
import { list } from './steps.utils'
import InvisButton from '@/share/Animation/easterEgg/components/InvisButton'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMedia'
import { breakPoints } from '@/utils/breakPoints'
import { useTheme } from 'next-themes'
import { Theme } from '@/utils/helpers/getThemeColors'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'

export default function Steps() {
  const isLargeScreen = useMediaQuery(`(max-width: ${breakPoints.Large})`)
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark

  return (
    <Section>
      <Wrapper isDarkMode={isDarkMode}>
        <Container isDeactive={isLargeScreen}>
          <Header>
            <Title>
              <AnimationFadeIn>
                <InvisButton value={'Э'}>Э</InvisButton>
                <InvisButton value={'т'}>т</InvisButton>апы ра
                <InvisButton value={'б'}>б</InvisButton>
                оты
              </AnimationFadeIn>
            </Title>
            <Content>
              <AnimationFadeIn>
                Наша работа строится по принципу максимальной эффективности
                каждого шага
              </AnimationFadeIn>
            </Content>
          </Header>
        </Container>
        <List>
          {list.map((item, index) => (
            <Card key={index} index={index} isDarkMode={isDarkMode}>
              <ImageWrapper isDarkMode={isDarkMode}>
                <Image
                  src={item.img}
                  width={750}
                  height={415}
                  alt="interier"
                  style={{
                    marginLeft: 'auto',
                    maxWidth: '100%',
                    maxHeight: 'min(70vw, 415px)',
                    objectFit: 'cover',
                    height: 'auto',
                  }}
                />
              </ImageWrapper>
              <CardContent>
                <CardTitle isDarkMode={isDarkMode}>
                  <AnimationFadeIn>{item.title}</AnimationFadeIn>
                </CardTitle>
                <DesciptionList>
                  {item.description.map((item, index) => (
                    <DesciptionItem key={index} isDarkMode={isDarkMode}>
                      <AnimationFadeIn>{item}</AnimationFadeIn>
                    </DesciptionItem>
                  ))}
                </DesciptionList>
              </CardContent>
            </Card>
          ))}
        </List>
      </Wrapper>
    </Section>
  )
}
