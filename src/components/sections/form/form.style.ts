import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: ${indents.indent120};
`

export const Wrapper = styled.div<{ isPadding?: boolean }>`
  flex: 1;
  background-color: ${Color.CORAL};
  padding-inline: ${({ isPadding }) => isPadding && indents.indent20};
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${indents.indent35};
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

export const ButtonWrapper = styled.div``
