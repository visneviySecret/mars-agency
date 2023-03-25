import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: ${indents.indent20};
`

export const Wrapper = styled.div`
  flex: 1;
  background-color: ${Color.CORAL};
`

export const FormWrapper = styled.div`
  padding-inline: ${indents.indent20};
`

export const Header = styled.header`
  margin-top: ${indents.indent40};
  margin-bottom: ${indents.indent140};
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 25px;
  line-height: 130%;
  color: ${Color.WHITE};
`

export const ButtonWrapper = styled.div`
  margin-top: ${indents.indent40};

  & > * {
    width: 100%;
  }
`
