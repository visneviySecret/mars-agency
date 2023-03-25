import { Theme } from '@/utils/helpers/getThemeColors'
import styled from 'styled-components'

export const Section = styled.section`
  border-top: 1px solid;
  border-bottom: 1px solid;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
export const List = styled.ul<{ theme: Theme }>`
  position: relative;
  display: flex;
  list-style: none;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  margin-top: 219px;
  margin-bottom: 259px;
  transition-property: filter, -webkit-filter;
  transition-duration: 0.3s;
  filter: grayscale(1)
    ${({ theme }) => theme === Theme.dark && ' brightness(1.5)'};
`

export const Partner = styled.div<{ theme: Theme }>`
  position: relative;
  flex: 1;
  padding-top: 20px;
  border-right: 1px solid;

  & + div {
    border-right: none;
  }

  &:hover > ${List} {
    filter: grayscale(0);
  }
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  text-transform: uppercase;
`
