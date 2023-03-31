import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: clamp(${indents.indent15}, 4.5vw, ${indents.indent30});
  text-transform: uppercase;
`

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${indents.indent10};

  @media (max-width: ${breakPoints.Tablet}) {
    margin-bottom: ${indents.indent10};
    display: block;
  }
`

export const Title = styled.h2`
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;

  @media (max-width: ${breakPoints.Tablet}) {
    padding-bottom: max(5px, 1.5vw);
  }

  @media (max-width: ${breakPoints.Touch}) {
    font-size: 11px;
    padding-bottom: max(5px, 1.5vw);
  }
`

export const Content = styled.p`
  flex: 2;
  line-height: 110%;
  text-align: justify;
  font-size: clamp(18px, 3vw, 53px);
  line-height: 130%;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: clamp(10px, 2vw, 20px);

  @media (max-width: ${breakPoints.Tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: clamp(145px, 30vw, 409px);
  padding: clamp(10px, 2.5vw, ${indents.indent18});
  background-color: ${Color.LIGHT};
`

export const IconWrapper = styled.div`
  width: clamp(20px, 6.4vw, 75px);
`

export const ItemTitle = styled.span`
  font-weight: 800;
  font-size: clamp(12px, 2vw, 28px);
  line-height: 100%;
  color: ${Color.GREY};
`

export const Accented = styled.span`
  color: ${Color.CORAL};
`
