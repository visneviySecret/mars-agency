import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: clamp(${indents.indent10}, 4.5vw, ${indents.indent20});
`

export const Wrapper = styled.form`
  flex: 1;
  background-color: ${Color.CORAL};
  @media (max-width: ${breakPoints.Tablet}) {
    padding-bottom: clamp(${indents.indent20}, 4.5vw, ${indents.indent30});
  }
`

export const FormWrapper = styled.div`
  padding-inline: clamp(${indents.indent10}, 2.4vw, ${indents.indent20});
`

export const Header = styled.header`
  padding-top: clamp(${indents.indent10}, 2vw, ${indents.indent40});
  margin-bottom: ${indents.indent140};
  @media (max-width: ${breakPoints.Tablet}) {
    margin-bottom: clamp(${indents.indent20}, 10vw, ${indents.indent80});
  }
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: clamp(14px, 3.15vw, 25px);
  line-height: 130%;
  color: ${Color.WHITE};
`

export const ButtonWrapper = styled.div`
  margin-top: clamp(${indents.indent20}, 4.5vw, ${indents.indent40});
  margin-top: 30px;
  margin-bottom: clamp(${indents.indent20}, 4.5vw, ${indents.indent30});

  & > * {
    width: 100%;
  }
  @media (max-width: ${breakPoints.Tablet}) {
    margin-bottom: 0;
  }
`
