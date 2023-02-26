import React, { useState } from 'react'
import {
  Section,
  ImageWrapper,
  Title,
  Wrapper,
  Item,
  ItemNumber,
  ItemTitle,
  List,
  Content,
  DesciptionList,
  DesciptionItem,
  ItemWrapper,
} from './steps.style'
import Image from 'next/image'
import { Container } from '../../styles/container.style'
import { list } from './steps.utils'

export default function Steps() {
  const [isAcive, setIsActive] = useState(-1)

  const handleMouseEnter = (index: number) => {
    setIsActive(index)
  }

  const handleMouseLeave = () => {
    setIsActive(-1)
  }

  return (
    <Section>
      <Container>
        <Wrapper>
          <Content>
            <Title>Эффективная работа на каждом этапе</Title>
            <ImageWrapper>
              <Image alt="Step 1" src="/steps1.png" width={355} height={430} />
              <Image alt="Step 2" src="/steps2.png" width={178} height={215} />
            </ImageWrapper>
          </Content>
          <List>
            {list.map((item, index) => (
              <Item
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <ItemNumber>{'0' + (index + 1)}</ItemNumber>

                <ItemWrapper>
                  <ItemTitle>{item.title}</ItemTitle>
                  {isAcive === index && (
                    <DesciptionList>
                      {item.description.map((item, index) => (
                        <DesciptionItem key={index}>{item}</DesciptionItem>
                      ))}
                    </DesciptionList>
                  )}
                </ItemWrapper>
              </Item>
            ))}
          </List>
        </Wrapper>
      </Container>
    </Section>
  )
}
