import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: calc(12rem - 3.3rem);
  color: ${Color.BLACK};
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.3rem;
`

export const Title = styled.h2`
  flex: 1;
  font-size: clamp(1.5rem, 8vw, 2.8rem);
  font-weight: 600;
  line-height: 110%;
`

export const Content = styled.p`
  flex: 1;
  font-weight: 400;
  font-size: 34px;
  line-height: 130%;
`

export const ImageWrapper = styled.div`
  flex: 1;
`

export const List = styled.div`
  flex: 1;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 5.55rem;
  border-top: solid 1px ${Color.BLACK};
  &:last-child {
    border-bottom: solid 1px ${Color.BLACK};
  }
`

export const ItemNumber = styled.span`
  flex: 1;
  font-weight: 500;
  line-height: 100%;
  opacity: 0.8;
`

export const ItemTitle = styled.span`
  flex: 1;
  font-weight: 400;
  line-height: 130%;
  font-size: 1rem;
`
