import styled from 'styled-components'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import { breakPoints } from '@/utils/breakPoints'

const getModeBackground = (isDarkMode: boolean) => {
  return isDarkMode ? Color.DARK10 : Color.BLACK
}

export const Section = styled.section<{ isDarkMode: boolean }>`
  margin-bottom: clamp(${indents.indent20}, 1.5vw, ${indents.indent45});
  color: ${Color.WHITE};
`

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  padding-top: clamp(${indents.indent10}, 1.5vw, ${indents.indent30});
  padding-inline: clamp(0px, 1vw, ${indents.indent20});
  padding-bottom: clamp(${indents.indent20}, 1.5vw, ${indents.indent45});

  background-color: ${({ isDarkMode }) => getModeBackground(isDarkMode)};

  @media (max-width: ${breakPoints.Tablet}) {
    padding-inline: 0;
  }
`

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: clamp(${indents.indent50}, 12.5vw, ${indents.indent120});

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
    padding-inline: clamp(${indents.indent10}, 1.5vw, ${indents.indent15});
  }
`

export const Title = styled.h2`
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  text-transform: uppercase;

  @media (max-width: ${breakPoints.Tablet}) {
    padding-bottom: max(5px, 1.5vw);
  }

  @media (max-width: ${breakPoints.Touch}) {
    font-size: 11px;
  }
`

export const ContentWrapper = styled.div`
  max-width: 620px;
`

export const Content = styled.p`
  flex: 1;
  font-size: clamp(14px, 2.2vw, 25px);
  line-height: 130%;
  margin-top: ${indents.indent10};
  padding-left: ${indents.indent10};

  @media (max-width: ${breakPoints.Tablet}) {
    padding-left: 0;
  }
`

export const List = styled.ul``

export const Item = styled.li`
  display: flex;
  width: 100%;
  list-style-type: none;
  border-top: solid 1px;
  border-bottom: solid 1px;
  padding-top: ${indents.indent10};
  padding-bottom: clamp(${indents.indent20}, 4.55vw, ${indents.indent60});

  & + li {
    border-top: none;
  }

  @media (max-width: ${breakPoints.Tablet}) {
    padding-inline: clamp(${indents.indent10}, 1.5vw, ${indents.indent15});
  }

  @media (max-width: ${breakPoints.Touch}) {
    display: block;
  }
`

export const ItemTitle = styled.h3`
  flex: 1;
  font-size: clamp(18px, 5.5vw, 53px);
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;
`

export const ItemDescriptionWrapper = styled.div`
  flex: 1;
`

export const ItemDescription = styled.span`
  display: block;
  font-size: clamp(12px, 2.19vw, 16px);
  max-width: 355px;
  line-height: 120%;
  padding-left: ${indents.indent10};

  @media (max-width: ${breakPoints.Touch}) {
    padding-left: 0;
  }
`
