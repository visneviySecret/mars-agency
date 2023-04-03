import { breakPoints } from '@/utils/breakPoints'
import styled from 'styled-components'

export const HideOverflow = styled.div`
  overflow-x: hidden;
`

export const Section = styled.section`
  margin-top: -0.6rem;
  margin-bottom: 4.68rem;

  @media (max-width: ${breakPoints.Tablet}) {
    margin-top: calc(40px - 0.6rem - 1.7vw);
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: clamp(5px, 1.7vw, 10px);

  @media (max-width: ${breakPoints.Tablet}) {
    flex-direction: column;
    gap: clamp(5px, 1.7vw, 10px);
  }
`

export const TitleWrapper = styled.div`
  width: calc(100% + 1vw);
  margin-bottom: calc(10px + 0.6vw);
  translate: -5px -4px;
`
export const Title = styled.h1`
  font-size: clamp(25px, 8.4vw, 134px);
  font-weight: 400;
  line-height: 70%;
  letter-spacing: -7px;
  text-align: center;

  @media (max-width: 1010px) {
    letter-spacing: -6px;
    font-size: 8.6vw;
  }
  @media (max-width: 840px) {
    letter-spacing: -6px;
  }
  @media (max-width: ${breakPoints.Tablet}) {
    letter-spacing: -3px;
    font-size: 8.2vw;
  }
  @media (max-width: ${breakPoints.Touch}) {
    letter-spacing: -1px;
    font-size: 7.4vw;
  }
`
