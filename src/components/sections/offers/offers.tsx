import React, { useState } from 'react'
import {
  Section,
  Title,
  Wrapper,
  Content,
  Item,
  ItemNumber,
  ItemTitle,
  List,
  Text,
  ItemContentWrapper,
  ItemDescription,
  ItemWrapper,
  ItemCursorWrapper,
  ItemCursor,
} from './offers.style'
import { Container } from '@/styles/container.style'
import { list } from './offers.utils'
import Button from '@/components/UI/Button/Button'
import { useTheme } from 'next-themes'
import InvisButton from '@/features/easterEgg/components/InvisButton'

export default function Offers() {
  const { theme } = useTheme()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [activeRow, setActiveRow] = useState(0)

  const isDarkMode = theme === 'dark'

  const handleClick = () => {
    setIsOpenModal((prev) => !prev)
  }

  const handleMouseClick = (index: number) => {
    setActiveRow((prev) => (prev === index ? -1 : index))
  }

  return (
    <Section id="offers">
      <Container>
        <Wrapper>
          <Title>
            У<InvisButton value={'с'}>с</InvisButton>
            луги
          </Title>
          <Content>
            <Text>
              Мы с заботой подходим к каждому клиенту, учитываем все потребности
            </Text>
            <Button onClick={handleClick}>Заказать услугу</Button>
          </Content>
        </Wrapper>
      </Container>

      <List>
        {list.map((item, index) => (
          <Item
            key={index}
            onClick={() => handleMouseClick(index)}
            isActive={activeRow === index}
            isDarkMode={isDarkMode}
          >
            <ItemWrapper>
              <ItemNumber>{'0' + (index + 1)}</ItemNumber>
              <ItemContentWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                {activeRow === index && (
                  <ItemDescription>{item.description}</ItemDescription>
                )}
              </ItemContentWrapper>
              <ItemCursorWrapper>
                <ItemCursor
                  isActive={activeRow === index}
                  isDarkMode={isDarkMode}
                />
              </ItemCursorWrapper>
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </Section>
  )
}
