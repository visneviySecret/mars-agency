import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  border-top: 1px solid ${Color.GREY};
  margin-bottom: 120px;
`

export const Wrapper = styled.div`
  padding-block: 20px;
`

export const Header = styled.header`
  display: flex;
`

export const Title = styled.h2`
  flex: 1;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  padding-left: 11px;
  text-transform: uppercase;
`

export const Content = styled.p`
  flex: 1;
  font-size: 25px;
  line-height: 130%;
  margin-bottom: 120px;
  padding-left: 40px;
`

export const List = styled.ul``

export const Card = styled.li`
  display: flex;
  border-top: 1px solid ${Color.GREY};
  border-bottom: 1px solid ${Color.GREY};

  & + li {
    border-top: none;
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 20px 20px 20px;
  border-right: 1px solid ${Color.GREY};
`

export const CardContent = styled.div`
  flex: 1;
`

export const CardTitle = styled.h3`
  font-size: 53px;
  line-height: 100%;
  text-transform: uppercase;
  padding-left: 20px;
  padding-block: 46px;
  border-bottom: 1px solid ${Color.GREY};
`

export const DesciptionList = styled.ul`
  list-style-type: none;
`

export const DesciptionItem = styled.li`
  font-size: 25px;
  line-height: 130%;
  padding-left: 15px;
  padding-block: ${indents.indent20};
  border-bottom: 1px solid ${Color.GREY};

  & + li {
    border-top: none;
  }
`
