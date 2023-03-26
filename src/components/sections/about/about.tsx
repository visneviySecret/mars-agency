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
import { Key } from '@/assets/Icons/key'
import useMeasure from 'react-use-measure'

export default function About() {
  const [ref, { width }] = useMeasure()

  return (
    <Section id="about-us">
      <Container>
        <Header>
          <Title>О НАС</Title>
          <Content>
            Ваш <Accented>надежный</Accented> партнер в мире недвижимости
            Санкт-Петербурга и Ленинградской области
          </Content>
        </Header>
        <List>
          <Item>
            <IconWrapper ref={ref}>
              <Key size={width} />
            </IconWrapper>
            <ItemTitle>Осуществление сделки под ключ</ItemTitle>
          </Item>
          <Item>
            <IconWrapper>
              <Key size={width} />
            </IconWrapper>
            <ItemTitle>Гарантия юридической чистоты</ItemTitle>
          </Item>
          <Item>
            <IconWrapper>
              <Key size={width} />
            </IconWrapper>
            <ItemTitle>Обеспечение выгодной сделки</ItemTitle>
          </Item>
          <Item>
            <IconWrapper>
              <Key size={width} />
            </IconWrapper>
            <ItemTitle>Подготовка объекта к продаже</ItemTitle>
          </Item>
          <Item>
            <IconWrapper>
              <Key size={width} />
            </IconWrapper>
            <ItemTitle>Эффективное продвижение объекта</ItemTitle>
          </Item>
          <Item>
            <IconWrapper>
              <Key size={width} />
            </IconWrapper>
            <ItemTitle>Дистанционное одобрение ипотеки</ItemTitle>
          </Item>
        </List>
      </Container>
    </Section>
  )
}
