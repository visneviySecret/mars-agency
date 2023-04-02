import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

const getCustomThemeColor = (isLightTheme: boolean) => {
  return isLightTheme ? Color.GREY : Color.WHITE
}

export const Section = styled.section`
  margin-bottom: clamp(${indents.indent50}, 12.5vw, ${indents.indent120});
`

export const Header = styled.header`
  display: flex;
  margin-top: clamp(${indents.indent10}, 3vw, ${indents.indent20});
  margin-bottom: clamp(${indents.indent50}, 12.5vw, ${indents.indent120});

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
  }
`

export const Title = styled.h2`
  flex: 1;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  @media (max-width: ${breakPoints.Tablet}) {
    padding-bottom: max(5px, 1.5vw);
  }

  @media (max-width: ${breakPoints.Touch}) {
    font-size: 11px;
  }
`

export const SubTitle = styled.h3`
  flex: 1;
  font-weight: 400;
  font-size: clamp(14px, 3.1vw, 25px);
  line-height: 130%;
  margin-left: ${indents.indent10};
  padding-left: ${indents.indent10};

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
    margin-left: 0;
    margin-top: clamp(5px, 1.5vw, 10px);
    padding-left: 0;
  }
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  padding-top: clamp(${indents.indent10}, 3.5vw, ${indents.indent20});
  padding-bottom: clamp(${indents.indent20}, 6.5vw, ${indents.indent40});
  align-items: center;
  border-top: 1px solid;

  &:last-child {
    border-bottom: solid 1px;
  }

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
  }
`

export const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: clamp(${indents.indent15}, 3.6vw, ${indents.indent20});
  align-items: center;
`

export const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ItemTitle = styled.span`
  font-size: clamp(14px, 5vw, 18px);
  line-height: 130%;
`

export const ItemDescription = styled.span`
  font-weight: 400;
  max-width: 355px;
  opacity: 0.7;
`

export const ItemPhotoWrapper = styled.div``

export const ItemComment = styled.div`
  flex: 1;
  font-weight: 400;
  font-size: clamp(12px, 3.7vw, 18px);
  line-height: 130%;
  padding-left: ${indents.indent10};

  @media (max-width: ${breakPoints.Tablet}) {
    margin-top: clamp(10px, 3vw, 15px);
  }
`

export const ButtonWrapper = styled.div<{ isLightTheme: boolean }>`
  margin: ${indents.indent40} auto 0 auto;
  margin-top: clamp(${indents.indent20}, 6.5vw, ${indents.indent40});

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
