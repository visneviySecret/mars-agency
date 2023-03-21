import styled from 'styled-components'
import { Color } from '@/utils/color'

const getModeBackground = (isDarkMode: boolean) => {
  return isDarkMode ? Color.WHITE : Color.BLACK
}

const getModeColor = (isDarkMode: boolean) => {
  return isDarkMode ? Color.BLACK : Color.WHITE
}

export const Section = styled.section`
  margin-bottom: 12.2rem;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.33rem;
`

export const Title = styled.h2`
  flex: 1;
  font-size: clamp(1.5rem, 8vw, 2.8rem);
  font-weight: 600;
  line-height: 110%;
`

export const Content = styled.div`
  flex: 1;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 34px;
  line-height: 130%;
  margin-bottom: 2.22rem;
`

export const List = styled.ul``

export const Item = styled.li<{ isActive: boolean; isDarkMode: boolean }>`
  list-style-type: none;
  background-color: ${({ isActive, isDarkMode }) =>
    isActive && getModeBackground(isDarkMode)};
  max-width: ${(props) =>
    !props.isActive && 'calc(1600px - clamp(6rem, 1vw, 400px))'};
  height: ${({ isActive }) => (isActive ? '7.5rem' : '3.8rem')};
  border-top: solid 1px;
  color: ${({ isActive, isDarkMode }) => isActive && getModeColor(isDarkMode)};
  margin: 0 auto;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  & + li {
    border-top: ${({ isActive }) => isActive && 'none'};
  }

  &:last-child {
    border-bottom: solid 1px;
  }
`

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: calc(1600px - clamp(6rem, 30vw, 110px));
  height: 100%;
  margin: 0 auto;
`

export const ItemNumber = styled.span<{ isActive?: boolean }>`
  flex: 1;
  font-weight: 500;
  line-height: 100%;
  opacity: 0.8;
`

export const ItemContentWrapper = styled.div`
  flex: 1;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

export const ItemTitle = styled.span`
  font-weight: 600;
`

export const ItemDescription = styled.span`
  font-weight: 400;
  max-width: 355px;
  opacity: 0.7;
`

export const ItemCursorWrapper = styled.span`
  position: absolute;
  top: 30px;
  right: 14px;
`
export const ItemCursor = styled.span<{
  isActive: boolean
  isDarkMode: boolean
}>`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 14px;
    height: 1px;
    background: ${({ isActive, isDarkMode }) =>
      isActive ? getModeColor(isDarkMode) : getModeColor(!isDarkMode)};
    transition: rotate 250ms ease-in-out;
  }

  &::before {
    rotate: ${({ isActive }) => (isActive ? '45deg' : '135deg')};
  }
  &::after {
    translate: -10px;
    rotate: ${({ isActive }) => (isActive ? '-45deg' : '-135deg')};
  }
`
