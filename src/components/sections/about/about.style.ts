import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: ${indents.indent30};
  text-transform: uppercase;
`

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${indents.indent10};
`

export const Title = styled.h2`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
`

export const Content = styled.p`
  flex: 2;
  line-height: 110%;
  text-align: justify;
  font-size: 34px;
  line-height: 130%;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

  gap: clamp(0.5rem, 2vw, ${indents.indent10});
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 409px;
  padding: ${indents.indent18};
  background-color: ${Color.LIGHT};
`

export const ItemTitle = styled.span`
  font-weight: 800;
  font-size: 28px;
  line-height: 100%;
`

export const Accented = styled.span`
  color: ${Color.CORAL};
`
