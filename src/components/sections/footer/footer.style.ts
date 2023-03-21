import { Consts } from '@/utils/consts'
import styled from 'styled-components'

export const LogoWrapper = styled.button<{ isDarkMode?: boolean }>`
  align-self: flex-start;
  border: none;
  background: none;
  cursor: pointer;

  ${(props) => props.isDarkMode && `filter: invert(1);`}
  transition: filter ${Consts.toggleModDuration};
`

export const ColumnWrapper = styled.div`
  display: flex;
  padding-bottom: 4.4rem;
  border-bottom: 1px solid;
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const Title = styled.span`
  font-weight: 600;
  line-height: 130%;
`

export const Item = styled.a`
  text-decoration: none;
  font-weight: 400;
  line-height: 140%;
  max-width: 230px;
`

export const PolitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2.2rem;
`

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`
