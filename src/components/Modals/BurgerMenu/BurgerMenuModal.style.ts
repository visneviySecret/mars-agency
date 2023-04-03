import styled from 'styled-components'

export const Wrapper = styled.div<{ isActive: boolean; color: string }>`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 50px;
  right: -100%;
  translate: ${({ isActive }) => isActive && '-100% 0%'};
  background-color: ${({ color }) => color};
  padding: 20px;
  transition: translate 0.3s, background-color 0.3s;
  overflow: auto;
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
