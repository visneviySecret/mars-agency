import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

const getModeBackground = (isDarkMode: boolean) => {
  return isDarkMode ? Color.GREY : Color.WHITE
}

export const Section = styled.section`
  margin-bottom: clamp(${indents.indent50}, 14vw, ${indents.indent120});
`

export const Wrapper = styled.div`
  padding-block: clamp(${indents.indent10}, 3vw, ${indents.indent20});
  margin-inline: clamp(1rem, 7.5%, 20px);
  border-top: 1px solid ${Color.GREY};

  @media (max-width: ${breakPoints.Tablet}) {
    margin-inline: clamp(10px, 3.2vw, 20px);
  }
`

export const Header = styled.header`
  display: flex;
  margin-bottom: clamp(${indents.indent50}, 12.5vw, ${indents.indent120});

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
  }
`

export const Title = styled.h2`
  flex: 1;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;

  @media (max-width: ${breakPoints.Touch}) {
    font-size: 11px;
  }
`

export const Content = styled.div`
  flex: 1;
  font-size: clamp(14px, 3.13vw, 25px);
  line-height: 130%;
  padding-left: 10px;

  @media (max-width: ${breakPoints.Tablet}) {
    padding-left: 0;
    margin-top: max(5px, 1.5vw);
  }
`

export const List = styled.ul``

export const Card = styled.li<{ index: number; isDarkMode: boolean }>`
  position: sticky;
  top: ${({ index }) => index * 145}px;
  display: flex;
  background-color: ${({ isDarkMode }) => getModeBackground(isDarkMode)};

  border-top: 1px solid ${({ isDarkMode }) => getModeBackground(!isDarkMode)};

  &:last-child {
    border-bottom: 1px solid
      ${({ isDarkMode }) => getModeBackground(!isDarkMode)};
    z-index: 1000;
  }

  @media (max-width: ${breakPoints.Tablet}) {
    position: relative;
    top: 0;
    display: block;
  }
`

export const ImageWrapper = styled.div<{ isDarkMode: boolean }>`
  flex: 1;
  display: flex;
  border-right: 1px solid;
  padding: min(1vw, 20px) min(1vw, 20px) min(1vw, 20px);
  @media (max-width: ${breakPoints.Tablet}) {
    border: none;
    padding: 0; //необходимо, чтобы обнулить прошлый стиль
    padding-block: clamp(10px, 3.5vw, 15px);
  }
`

export const CardContent = styled.div`
  flex: 1.03;
`

export const CardTitle = styled.h3<{ isDarkMode: boolean }>`
  font-size: clamp(18px, 4.9vw, 53px);
  line-height: 100%;
  font-weight: 400;
  text-transform: uppercase;
  padding-left: min(1vw, 20px);
  padding-block: min(1.3vw, 24px) min(1vw, 20px);
  border-bottom: 1px solid ${({ isDarkMode }) => getModeBackground(!isDarkMode)};

  @media (max-width: ${breakPoints.Tablet}) {
    font-size: clamp(18px, 5.5vw, 53px);
    padding-left: 0;
  }
`

export const DesciptionList = styled.ul`
  list-style-type: none;
`

export const DesciptionItem = styled.li<{ isDarkMode: boolean }>`
  font-size: clamp(14px, 2.5vw, 25px);
  line-height: 130%;
  padding-left: min(1vw, 20px);
  padding-block: clamp(${indents.indent10}, 2.3vw, ${indents.indent20});
  border-bottom: 1px solid ${({ isDarkMode }) => getModeBackground(!isDarkMode)};

  & + li {
    border-top: none;
  }

  @media (max-width: ${breakPoints.Tablet}) {
    padding-left: 0;

    &:last-child {
      border-bottom: none;
    }
  }
`
