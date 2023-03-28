import { breakPoints } from '@/utils/breakPoints'
import { Theme } from '@/utils/helpers/getThemeColors'
import styled from 'styled-components'

export const Section = styled.section`
  border-top: 1px solid;
  border-bottom: 1px solid;

  @media (max-width: ${breakPoints.Tablet}) {
    border: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPoints.Tablet}) {
    display: block;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
`
export const List = styled.ul<{ theme: Theme }>`
  position: relative;
  display: flex;
  list-style: none;
  overflow: hidden;
  width: 100%;
  max-width: clamp(225px, 48vw, 590px);
  max-width: 320px;
  height: 80px;
  margin: 0 auto;
  margin-top: clamp(70px, 15vw, 219px);
  margin-bottom: clamp(96px, 16vw, 259px);
  transition-property: filter, -webkit-filter;
  transition-duration: 0.3s;
  filter: grayscale(1)
    ${({ theme }) => theme === Theme.dark && ' brightness(1.5)'};

  @media (max-width: ${breakPoints.Tablet}) {
    margin-top: clamp(70px, 26vw, 219px);
    margin-bottom: clamp(96px, 26vw, 259px);
  }
`

export const PartnerWrapper = styled.div`
  background-color: red;
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

  @media (max-width: ${breakPoints.Tablet}) {
    border-bottom: 1px solid;
    border-right: none;
    &:last-child {
      border-bottom: none;
    }
  }
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  text-transform: uppercase;

  @media (max-width: ${breakPoints.Touch}) {
    font-size: 11px;
  }
`
