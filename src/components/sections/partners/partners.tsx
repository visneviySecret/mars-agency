import React from 'react'
import { Section, Title, Wrapper, Item, List } from './partners.style'
import { Container } from '@/components/UI/container.style'
import { list } from './partners.utils'

export default function Partners() {
  return (
    <Section id="partners">
      <Container>
        <Wrapper>
          <Title>Наши партнеры</Title>
          {/* <DualButtons /> */}
        </Wrapper>
        <Wrapper>
          <List>
            {list.map((item, index) => (
              <Item key={index}></Item>
            ))}
          </List>
        </Wrapper>
      </Container>
    </Section>
  )
}
