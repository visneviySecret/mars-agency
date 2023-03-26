import React from 'react'
import {
  Section,
  Title,
  Wrapper,
  Card,
  CardTitle,
  List,
  Content,
  DesciptionList,
  DesciptionItem,
  Header,
  ImageWrapper,
  CardContent,
} from './steps.style'
import { Container } from '@/components/UI/Container/container.style'
import { list } from './steps.utils'
import InvisButton from '@/features/easterEgg/components/InvisButton'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMedia'
import { breakPoints } from '@/utils/breakPoints'

export default function Steps() {
  const isLargeScreen = useMediaQuery(`(max-width: ${breakPoints.Large})`)

  return (
    <Section>
      <Wrapper>
        <Container isDeactive={isLargeScreen}>
          <Header>
            <Title>
              <InvisButton value={'Э'}>Э</InvisButton>
              <InvisButton value={'т'}>т</InvisButton>апы ра
              <InvisButton value={'б'}>б</InvisButton>
              оты
            </Title>
            <Content>
              Наша работа строится по принципу максимальной эффективности
              каждого шага
            </Content>
          </Header>
        </Container>
        <List>
          {list.map((item, index) => (
            <Card key={index} index={index}>
              <ImageWrapper>
                <Image
                  src={item.img}
                  width={750}
                  height={415}
                  alt="interier"
                  style={{
                    marginLeft: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageWrapper>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <DesciptionList>
                  {item.description.map((item, index) => (
                    <DesciptionItem key={index}>{item}</DesciptionItem>
                  ))}
                </DesciptionList>
              </CardContent>
            </Card>
          ))}
        </List>
      </Wrapper>
    </Section>
  )
}
