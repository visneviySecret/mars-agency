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
import { Container } from '@/components/UI/Container/container.style'
import { list } from './offers.utils'
import { useTheme } from 'next-themes'
import InvisButton from '@/features/easterEgg/components/InvisButton'
import AnimationFadeIn from '@/share/Animation/AnimationFadeIn'

export default function Offers() {
  const { theme } = useTheme()

  const isDarkMode = theme === 'dark'

  return (
    <Section id="offers" isDarkMode={isDarkMode}>
      <Container>
        <Wrapper isDarkMode={isDarkMode}>
          <Header>
            <Title>
              <AnimationFadeIn>
                У<InvisButton value={'с'}>с</InvisButton>
                луги
              </AnimationFadeIn>
            </Title>
            <Content>
              <AnimationFadeIn>
                Помогаем с покупкой и продажей недвижимости <br /> так, чтобы
                сэкономить время и силы клиентов
              </AnimationFadeIn>
            </Content>
          </Header>

          <List>
            {list.map((item, index) => (
              <Item key={index}>
                <ItemTitle>
                  <AnimationFadeIn>{item.title}</AnimationFadeIn>
                </ItemTitle>
                <ItemDescriptionWrapper>
                  <ItemDescription>
                    <AnimationFadeIn>{item.description}</AnimationFadeIn>
                  </ItemDescription>
                </ItemDescriptionWrapper>
              </Item>
            ))}
          </List>
        </Wrapper>
      </Container>
    </Section>
  )
}
