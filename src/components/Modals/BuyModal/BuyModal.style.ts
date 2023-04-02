import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

const getModeBackground = (isDarkMode: boolean) => {
  return isDarkMode ? Color.GREY : Color.WHITE
}

export const Section = styled.section<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => getModeBackground(isDarkMode)};
  height: 100%;

  @media (max-width: ${breakPoints.Tablet}) {
    //необхоидимая оптимизация для мобилок
    margin-top: calc(100px - 16vw);
  }
`

export const ClosePanel = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding-block: clamp(${indents.indent12}, 3vw, ${indents.indent23});
  padding-inline: clamp(${indents.indent10}, 2.5vw, ${indents.indent20});
  border-bottom: 1px solid ${({ isDarkMode }) => getModeBackground(!isDarkMode)};
  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  margin-top: clamp(${indents.indent10}, 3vw, ${indents.indent20});
  margin-bottom: 75px;
  margin-bottom: ${indents.indent80};

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
    margin-bottom: max(${indents.indent50}, 3vw);
  }
`
export const Title = styled.h2`
  flex: 1;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;

  @media (max-width: ${breakPoints.Tablet}) {
    padding-bottom: max(5px, 1.5vw);
  }

  @media (max-width: ${breakPoints.Touch}) {
    font-size: 11px;
  }
`

export const Description = styled.p`
  flex: 1;
  font-size: clamp(14px, 3.13vw, 25px);
  line-height: 130%;
`

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${indents.indent20};
`
