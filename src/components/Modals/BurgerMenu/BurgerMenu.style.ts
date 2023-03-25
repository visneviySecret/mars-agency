import { Color } from '@/utils/color'
import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  translate: 0% 100%;
  background-color: ${Color.WHITE};
`

export const NavWrapper = styled.div`
  padding-block: 80px 162px;
`

export const ButtonWrapper = styled.div`
  max-width: 211px;
  margin-inline: auto;
  font-size: 12px;
  line-height: 140%;
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
