import { breakPoints } from '@/utils/breakPoints'
import styled from 'styled-components'

export const Wrapper = styled.div<{ isActive: boolean; color: string }>`
  z-index: 1000;
  position: fixed;
  top: 50px;
  right: -100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  translate: ${({ isActive }) => isActive && '-100% 0%'};
  background-color: ${({ color }) => color};
  padding: 20px;
  transition: translate 0.3s, background-color 0.3s;
  overflow: auto;

  @media (max-width: ${breakPoints.Tablet}) {
    //необхоидимая оптимизация для мобилок
    top: calc(100px - 9vw);
  }
  @media (max-width: ${breakPoints.Touch}) {
    //необхоидимая оптимизация для мобилок
    top: calc(100px - 10vw);
  }
`

export const NavWrapper = styled.div`
  padding-top: min(80px, 13vw);
`

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ButtonWrapper = styled.div`
  margin-top: auto;
  flex: 1;
  max-width: 211px;
  margin-inline: auto;
  font-size: 12px;
  line-height: 140%;
`

export const SocialWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`
