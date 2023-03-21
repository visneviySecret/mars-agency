import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Section = styled.section`
  border-top: 1px solid ${Color.GREY};
  border-bottom: 1px solid ${Color.GREY};
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const Partner = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-left: 20px;
  border-right: 1px solid ${Color.GREY};

  & + div {
    border-right: none;
  }
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  text-transform: uppercase;
`

export const List = styled.ul`
  display: flex;
  max-width: 394px;
  margin: 0 auto;
  margin-top: 219px;
  margin-bottom: 259px;
  overflow: hidden;
  transition-property: filter, -webkit-filter;
  transition-duration: 0.3s;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`
