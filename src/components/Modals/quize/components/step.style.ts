import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${Color.LIGHT};
  padding: ${indents.indent20};
`
export const Title = styled.span`
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 130%;
`

export const FieldsWrapper = styled.div`
  flex: 1;
  max-width: 100%;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
`
