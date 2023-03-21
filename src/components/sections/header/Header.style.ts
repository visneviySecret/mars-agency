import { Consts } from '@/utils/consts'
import styled from 'styled-components'

export const Section = styled.section`
  padding-top: 16px;
  margin-bottom: 11px;
`

export const Wrapper = styled.nav`
  display: flex;
  align-items: top;
`

export const LogoWrapper = styled.div<{ isDarkMode?: boolean }>`
  flex: 2;

  ${(props) => props.isDarkMode && `filter: invert(1);`}
  transition: filter ${Consts.toggleModDuration};
`

export const List = styled.ul`
  flex: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  & > a {
    text-decoration: none;
  }
`

export const ButtonWrapper = styled.div`
  flex: 1;
`
