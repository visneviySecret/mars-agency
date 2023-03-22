import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section``

export const ClosePanel = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${indents.indent20} ${indents.indent23};
  border-bottom: 1px solid ${Color.GREY};
  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  margin-block: ${indents.indent20} ${indents.indent75};
`
export const Title = styled.h2`
  flex: 1;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
`

export const Description = styled.p`
  flex: 1;
  font-size: 25px;
  line-height: 130%;
`

export const Wrapper = styled.div`
  position: relative;
  padding: 3.3rem 0;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 5.55rem;
  border-top: solid 1px;
  &:last-child {
    border-bottom: solid 1px;
  }
`

export const ItemTitle = styled.span`
  flex: 1;
  font-weight: 400;
  line-height: 130%;
  font-size: 1rem;
`
