import { breakPoints } from '@/utils/breakPoints'
import { Consts } from '@/utils/consts'
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
`

export const LogoWrapper = styled.div<{ isDarkMode?: boolean }>`
  flex: 1;

  ${(props) => props.isDarkMode && `filter: invert(1);`}
  transition: filter ${Consts.toggleModDuration};
`

export const MenuWrapper = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: ${breakPoints.Tablet}) {
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
