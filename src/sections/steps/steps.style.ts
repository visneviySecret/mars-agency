import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: calc(12rem);
  color: ${Color.BLACK};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(0.5rem, 2vw, 1.11rem);
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: clamp(1.5rem, 8vw, 2.8rem);
  font-weight: 600;
  line-height: 110%;
`

export const ImageWrapper = styled.div`
  display: flex;
  gap: clamp(0.5rem, 2vw, 1.11rem);
  align-items: baseline;
  width: clamp(10rem, 20vw, 550px);
`

export const List = styled.ul`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: clamp(0.5rem, 2vw, 1.11rem);

  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.11rem;
  border: solid 1px ${Color.BLACK};
  max-width: 355px;
  height: auto;
`

export const ItemNumber = styled.span`
  font-weight: 500;
  line-height: 100%;
  opacity: 0.8;
`

export const ItemWrapper = styled.div``

export const ItemTitle = styled.span`
  font-weight: 500;
  line-height: 120%;
  font-size: 1.4rem;
`

export const DesciptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  list-style-type: none;
  margin-top: 1.1rem;
`

export const DesciptionItem = styled.li`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${Color.BLACK};
  opacity: 0.7;
`
