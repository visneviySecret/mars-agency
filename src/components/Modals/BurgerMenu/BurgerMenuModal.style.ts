import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Wrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  z-index: 500;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: -100vh;
  left: 5px;
  translate: ${({ isActive }) => isActive && '0% 108%'};
  background-color: ${Color.WHITE};
  padding: 20px;
  transition: translate 0.5s ease-in-out;
`

export const NavWrapper = styled.div`
  padding-block: 80px 0px;
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
  align-self: flex-end;
`
