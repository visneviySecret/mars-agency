import React from 'react'
import {
  Section,
  Header,
  Title,
  Content,
  Item,
  ItemTitle,
  List,
  Accented,
  IconWrapper,
} from './about.style'
import { Container } from '@/components/UI/Container/container.style'
import { Key } from '@/assets/Icons/Key'
import useMeasure from 'react-use-measure'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'
import { Garant } from '@/assets/Icons/Garant'
import { Deal } from '@/assets/Icons/Deal'
import { Document } from '@/assets/Icons/Document'
import { Remote } from '@/assets/Icons/Remote'
import { Promotion } from '@/assets/Icons/Propmotion'

export default function About() {
  const [ref, { width }] = useMeasure()

  return (
    <Section id="about-us">
      <Container>
        <Header>
          <Title>
            <AnimationFadeIn>О НАС</AnimationFadeIn>
          </Title>
          <Content>
            <AnimationFadeIn>
              Ваш <Accented>надежный</Accented> партнер в мире недвижимости
              Санкт-Петербурга и Ленинградской области
            </AnimationFadeIn>
          </Content>
        </Header>
        <List>
          <AnimationFadeIn>
            <Item>
              <IconWrapper ref={ref}>
                <Key size={width} />
              </IconWrapper>
              <ItemTitle>Осуществление сделки под ключ</ItemTitle>
            </Item>
          </AnimationFadeIn>
          <AnimationFadeIn>
            <Item>
              <IconWrapper>
                <Garant size={width} />
              </IconWrapper>
              <ItemTitle>Гарантия юридической чистоты</ItemTitle>
            </Item>
          </AnimationFadeIn>
          <AnimationFadeIn>
            <Item>
              <IconWrapper>
                <Deal size={width} />
              </IconWrapper>
              <ItemTitle>Обеспечение выгодной сделки</ItemTitle>
            </Item>
          </AnimationFadeIn>
          <AnimationFadeIn>
            <Item>
              <IconWrapper>
                <Document size={width} />
              </IconWrapper>
              <ItemTitle>Подготовка объекта к продаже</ItemTitle>
            </Item>
          </AnimationFadeIn>
          <AnimationFadeIn>
            <Item>
              <IconWrapper>
                <Promotion size={width} />
              </IconWrapper>
              <ItemTitle>Эффективное продвижение объекта</ItemTitle>
            </Item>
          </AnimationFadeIn>
          <AnimationFadeIn>
            <Item>
              <IconWrapper>
                <Remote size={width} />
              </IconWrapper>
              <ItemTitle>Дистанционное одобрение ипотеки</ItemTitle>
            </Item>
          </AnimationFadeIn>
        </List>
      </Container>
    </Section>
  )
}
