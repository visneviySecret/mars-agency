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
import { Container } from '../container.style'
import { list } from './about.utils'

export default function About() {
  return (
    <Section>
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
              style={{
                position: 'absolute',
                inset: 'auto auto 0 0',
              }}
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
