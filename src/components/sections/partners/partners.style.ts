import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: calc(12.2rem - 3.3rem);
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

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  border: 1px solid ${Color.BLACK};
  border-right: none;
`
