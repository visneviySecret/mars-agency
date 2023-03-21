import React from 'react'
import {
  Section,
  ImageWrapper,
  Title,
  Wrapper,
  Content,
  Item,
  ItemNumber,
  ItemTitle,
  List,
} from './about.style'
import Image from 'next/image'
import { Container } from '@/styles/container.style'
import { list } from './about.utils'

export default function About() {
  return (
    <Section id="about-us">
      <Container>
        <Wrapper>
          <Title>Почему нам доверяют</Title>

          <Content>
            Благодаря четкой последовательности действий, наша работа Благодаря
            четкой последовательности действий, наша работа
          </Content>
        </Wrapper>
        <Wrapper>
          <ImageWrapper>
            <Image
              alt="Our company"
              src="/about.png"
              width={355}
              height={430}
            />
          </ImageWrapper>

          <List>
            {list.map((item, index) => (
              <Item key={index}>
                <ItemNumber>{'0' + (index + 1)}</ItemNumber>
                <ItemTitle>{item.title}</ItemTitle>
              </Item>
            ))}
          </List>
        </Wrapper>
      </Container>
    </Section>
  )
}
