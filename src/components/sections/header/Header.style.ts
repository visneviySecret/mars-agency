import { breakPoints } from '@/utils/breakPoints'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const Section = styled.section`
  z-index: 1000;
  padding-top: max(calc(25px - 0.5vw), 16px);
  margin-bottom: 11px;

  @media (max-width: ${breakPoints.Tablet}) {
    padding-top: 25px;
  }
`

export const Wrapper = styled.nav`
  position: relative;
  display: flex;
  min-height: 12px;
`

export const LogoWrapper = styled.div`
  flex: 1;
`
export const LogoWidthWrapper = styled.div`
  width: clamp(${indents.indent60}, 15.5vw, ${indents.indent150});
  height: clamp(${indents.indent12}, 3.3vw, ${indents.indent30});
`

export const MenuWrapper = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: ${breakPoints.Medium}) {
    display: none;
  }
`
export const NavigationWrapper = styled.div`
  flex: 1;
`

export const TogglerAndButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`
