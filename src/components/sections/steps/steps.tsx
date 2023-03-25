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

export default function Steps() {
  return (
    <Section>
      <Wrapper>
        <Container>
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
                    margin: '20px 20px 20px',
                    marginLeft: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
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
