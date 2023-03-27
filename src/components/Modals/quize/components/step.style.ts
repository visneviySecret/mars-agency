import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background-color: ${Color.LIGHT};
  padding: clamp(${indents.indent10}, 2.5vw, ${indents.indent20});

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
  }
`
export const Title = styled.span`
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(14px, 3.13vw, 25px);
  line-height: 130%;
`

export const FieldsWrapper = styled.div`
  flex: 1;
  margin-bottom: clamp(${indents.indent10}, 4.5vw, ${indents.indent40});

  @media (max-width: ${breakPoints.Tablet}) {
    margin-top: max(5px, 1.5vw);
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${indents.indent10};
`
