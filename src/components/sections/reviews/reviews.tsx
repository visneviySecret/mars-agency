import React, { useState } from 'react'
import {
  Section,
  Title,
  Item,
  ItemTitle,
  List,
  ItemDescription,
  ItemTitleWrapper,
  ItemPhotoWrapper,
  ItemComment,
  ItemWrapper,
  ButtonWrapper,
} from './reviews.style'
import { Container } from '@/components/UI/container.style'
import { list } from './reviews.utils'
import Button from '@/components/UI/Button/Button'

export default function Reviews() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <Section id="reviews">
      <Container>
        <Title>Они уже нам доверились</Title>

        <List>
          {list.map((item, index) => {
            if (index < 3 || isActive)
              return (
                <Item key={index}>
                  <ItemWrapper>
                    <ItemTitleWrapper>
                      <ItemTitle>{item.name}</ItemTitle>
                      <ItemDescription>{item.description}</ItemDescription>
                      <ItemPhotoWrapper></ItemPhotoWrapper>
                    </ItemTitleWrapper>
                  </ItemWrapper>
                  <ItemComment>{item.comment}</ItemComment>
                </Item>
              )
          })}
        </List>
        <ButtonWrapper>
          <Button onClick={handleClick}>
            {isActive ? 'Скрыть' : 'Показать еще'}
          </Button>
        </ButtonWrapper>
      </Container>
    </Section>
  )
}
