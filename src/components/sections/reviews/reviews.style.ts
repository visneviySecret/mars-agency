import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

const getCustomThemeColor = (isLightTheme: boolean) => {
  return isLightTheme ? Color.GREY : Color.WHITE
}

export const Section = styled.section`
  margin-bottom: ${indents.indent120};
`

export const Header = styled.header`
  display: flex;
  margin-top: ${indents.indent20};
  margin-bottom: ${indents.indent120};
`

export const Title = styled.h2`
  flex: 1;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`

export const SubTitle = styled.h3`
  flex: 1;
  font-weight: 400;
  font-size: 25px;
  line-height: 130%;
  margin-left: ${indents.indent10};
  padding-left: ${indents.indent10};
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  padding-block: ${indents.indent20};
  align-items: center;
  border-top: 1px solid;

  &:last-child {
    border-bottom: solid 1px;
  }
`

export const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: ${indents.indent20};
  align-items: center;
`

export const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ItemTitle = styled.span`
  font-size: 18px;
  line-height: 130%;
`

export const ItemDescription = styled.span`
  font-weight: 400;
  max-width: 355px;
  opacity: 0.7;
`

export const ItemPhotoWrapper = styled.div``

export const ItemComment = styled.p`
  flex: 1;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  padding-left: ${indents.indent10};
`

export const ButtonWrapper = styled.div<{ isLightTheme: boolean }>`
  margin: ${indents.indent40} auto 0 auto;

  & > * {
    background-color: transparent;
    color: ${({ isLightTheme }) => getCustomThemeColor(isLightTheme)};
    border: 1px solid ${({ isLightTheme }) => getCustomThemeColor(isLightTheme)};
  }

  &:hover > * {
    background-color: ${({ isLightTheme }) =>
      getCustomThemeColor(isLightTheme)};
    color: ${({ isLightTheme }) => getCustomThemeColor(!isLightTheme)};
    border: 2px solid;
  }
`
