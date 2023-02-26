import { Consts } from '@/utils/consts'
import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 45px 0;
  margin-bottom: calc(165px - 45px);
`

export const LogoWrapper = styled.button<{ isDarkMode?: boolean }>`
  border: none;
  background: none;
  cursor: pointer;

  ${(props) => props.isDarkMode && `filter: invert(1);`}
  transition: filter ${Consts.toggleModDuration};
`

export const Navigation = styled.nav``

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 40px;
`

export const Item = styled.li`
  & > a {
    text-decoration: none;
  }
`

export const Phone = styled.span``
