import React from 'react'
import { Section, Title, Wrapper, Item, List } from './partners.style'
import { Container } from '@/styles/container.style'
import { list } from './partners.utils'
import { DualButtons } from '@/components/UI/DualButtons/DualButton'

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
