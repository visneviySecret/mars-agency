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
} from './about.style'
import { Container } from '@/components/UI/Container/container.style'
import { list } from './about.utils'

export default function About() {
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
          {list.map((item, index) => (
            <Item key={index}>
              {item.icon()}
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  )
}
