import React, { useState } from 'react'
import {
  Section,
  Title,
  Item,
  ItemTitle,
  List,
  ItemDescription,
  ItemTitleWrapper,
  ItemPhotoWrapper,
  ItemComment,
  ItemWrapper,
  ButtonWrapper,
  SubTitle,
  Header,
} from './reviews.style'
import { Container } from '@/components/UI/Container/container.style'
import { clients } from './reviews.utils'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import { Theme } from '@/utils/helpers/getThemeColors'
import { useTheme } from 'next-themes'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'

export default function Reviews() {
  const [isActive, setIsActive] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <Section id="reviews">
      <Container>
        <Header>
          <Title>
            <AnimationFadeIn>отзывы</AnimationFadeIn>
          </Title>
          <SubTitle>
            <AnimationFadeIn>
              Что клиенты думают о сотрудничестве с нами
            </AnimationFadeIn>
          </SubTitle>
        </Header>
        <List>
          {clients.map((client, index) => {
            if (index < 3 || isActive)
              return (
                <Item key={index} isDarkMode={isDarkMode}>
                  <ItemWrapper>
                    <ItemPhotoWrapper>
                      <AnimationFadeIn>
                        <Image
                          src={client.photo}
                          alt="client"
                          width={80}
                          height={80}
                        />
                      </AnimationFadeIn>
                    </ItemPhotoWrapper>
                    <ItemTitleWrapper>
                      <ItemTitle>
                        <AnimationFadeIn>{client.name}</AnimationFadeIn>
                      </ItemTitle>
                      <ItemDescription>
                        <AnimationFadeIn>{client.description}</AnimationFadeIn>
                      </ItemDescription>
                    </ItemTitleWrapper>
                  </ItemWrapper>
                  <ItemComment>
                    <AnimationFadeIn>{client.comment} </AnimationFadeIn>
                  </ItemComment>
                </Item>
              )
          })}
        </List>
        <ButtonWrapper isLightTheme={theme === Theme.light}>
          <Button onClick={handleClick}>
            {isActive ? 'Скрыть' : 'Показать еще'}
          </Button>
        </ButtonWrapper>
      </Container>
    </Section>
  )
}
