import React from 'react'
import {
  Section,
  Title,
  Header,
  Content,
  Item,
  ItemTitle,
  List,
  ItemDescription,
  Wrapper,
  ItemDescriptionWrapper,
} from './offers.style'
import { Container } from '@/styles/container.style'
import { list } from './offers.utils'
import { useTheme } from 'next-themes'
import InvisButton from '@/features/easterEgg/components/InvisButton'

export default function Offers() {
  const { theme } = useTheme()

  const isDarkMode = theme === 'dark'

  return (
    <Section id="offers" isDarkMode={isDarkMode}>
      <Container>
        <Wrapper>
          <Header>
            <Title>
              У<InvisButton value={'с'}>с</InvisButton>
              луги
            </Title>
            <Content>
              Помогаем с покупкой и продажей недвижимости так, чтобы сэкономить
              время и силы клиентов
            </Content>
          </Header>

          <List>
            {list.map((item, index) => (
              <Item key={index}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescriptionWrapper>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemDescriptionWrapper>
              </Item>
            ))}
          </List>
        </Wrapper>
      </Container>
    </Section>
  )
}
