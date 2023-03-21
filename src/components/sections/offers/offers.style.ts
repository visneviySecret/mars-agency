import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'

const getModeBackground = (isDarkMode: boolean) => {
  return isDarkMode ? Color.WHITE : Color.BLACK
}

const getModeColor = (isDarkMode: boolean) => {
  return isDarkMode ? Color.BLACK : Color.WHITE
}

export const Section = styled.section<{ isDarkMode: boolean }>`
  margin-bottom: ${indents.indent46};
  color: ${({ isDarkMode }) => getModeColor(isDarkMode)};
  border-bottom: 1px solid ${Color.GREY};
`

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  padding: ${indents.indent30} ${indents.indent20} ${indents.indent44};
  background-color: ${({ isDarkMode }) => getModeBackground(isDarkMode)};
`

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.5rem;
`

export const Title = styled.h2`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  text-transform: uppercase;
`

export const Content = styled.p`
  flex: 1;
  font-size: 25px;
  line-height: 130%;
  margin-top: ${indents.indent10};
`

export const List = styled.ul``

export const Item = styled.li`
  display: flex;
  width: 100%;
  list-style-type: none;
  border-top: solid 1px;
  border-bottom: solid 1px;
  padding-top: ${indents.indent10};
  padding-bottom: ${indents.indent60};

  & + li {
    border-top: none;
  }
`

export const ItemTitle = styled.span`
  flex: 1;
  font-size: 53px;
  line-height: 130%;
  text-transform: uppercase;
`

export const ItemDescriptionWrapper = styled.div`
  flex: 1;
`

export const ItemDescription = styled.span`
  display: block;
  max-width: 355px;
  line-height: 120%;
`
