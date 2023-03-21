import { Color } from '@/utils/color'
import { Consts } from '@/utils/consts'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: ${Color.GREY};
  color: ${Color.WHITE};
  padding-top: ${indents.indent20};
  padding-bottom: ${indents.indent50};
`

export const Wrapper = styled.div`
  padding-inline: 20px;
`

export const ColumnWrapper = styled.div`
  display: flex;
  padding-bottom: ${indents.indent80};
  border-bottom: 1px solid;
`

export const EmptyColumn = styled.div`
  flex: 1;
`
export const NavigationWrapper = styled.div`
  flex: 1;
`

export const Contacts = styled.div`
  margin-bottom: ${indents.indent160};
`

export const Contact = styled.div`
  display: flex;
  border-bottom: 1px solid ${Color.WHITE};
  padding-block: ${indents.indent20};
`

export const Title = styled.span`
  flex: 1;
  font-size: 14px;
  text-transform: uppercase;
`

export const Name = styled.span`
  flex: 1;
  line-height: 120%;
`

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${indents.indent20};
`

export const LogoWrapper = styled.button<{ isDarkMode?: boolean }>`
  align-self: flex-start;
  border: none;
  background: none;
  cursor: pointer;

  ${(props) => props.isDarkMode && `filter: invert(1);`}
  transition: filter ${Consts.toggleModDuration};
`

export const Icons = styled.ul`
  display: flex;
  gap: ${indents.indent20};
  list-style-type: none;

  & > * {
    cursor: pointer;
  }
`

export const BottomLine = styled.div`
  border-bottom: 1px solid ${Color.WHITE};
`
