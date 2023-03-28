import { Color } from '@/utils/color'
import { indents } from '@/utils/indents'
import styled from 'styled-components'

export const OptionsWrapper = styled.div`
  z-index: 100;
  top: 50px;
  position: absolute;
  padding: ${indents.indent20};
  border: 1px solid ${Color.GREY};
  border-radius: 30px;
  background: ${Color.DARK_LIGHT};
  width: 100%;
`

export const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${indents.indent10};

  overflow-y: scroll;

  max-height: 240px;

  &::-webkit-scrollbar {
    width: 0.2vw;
    height: 2em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Color.GREY};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${Color.DARK_LIGHT};
  }
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
