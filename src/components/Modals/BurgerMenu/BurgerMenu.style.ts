import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  translate: 0% 100%;
  background-color: ${Color.WHITE};
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
