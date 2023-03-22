import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const OptionsList = styled.ul`
  z-index: 100;
  position: absolute;
  top: 50px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${indents.indent10};

  background: ${Color.WHITE};
  border: 1px solid ${Color.GREY};
  border-radius: 30px;
  padding: ${indents.indent20};
  overflow-y: scroll;

  max-height: 240px;
  width: 100%;
`

export const Option = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${indents.indent6};
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.4')};

  &:hover {
    opacity: 1;
  }
`
