import { breakPoints } from '@/utils/breakPoints'
import { Color } from '@/utils/color'
import styled from 'styled-components'

const getThemeColor = (isDarkMode: boolean) => {
  return isDarkMode ? Color.WHITE : Color.GREY
}

export const Container = styled.div`
  z-index: 10000;
  position: fixed;
  inset: 0;
  width: 99.5vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`
export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: clamp(300px, 70vw, 560px);
  min-height: 150px;
  padding: 20px;
  color: ${({ isDarkMode }) => getThemeColor(isDarkMode)};
  background-color: ${({ isDarkMode }) => getThemeColor(!isDarkMode)};
`

export const TitleWrapper = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  padding-top: 2px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${({ isDarkMode }) => getThemeColor(isDarkMode)};
`

export const Title = styled.h4`
  font-weight: 400;
  font-size: clamp(16px, 2vw, 25px);
  line-height: 110%;
  text-transform: uppercase;
`

export const Content = styled.p`
  font-size: clamp(14px, 1vw, 16px);
  line-height: 130%;
  margin-top: 20px;
  margin-bottom: 40px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: ${breakPoints.Tablet}) {
    flex-direction: column;
  }
`

export const ButtonWrapper = styled.div<{ isDarkMode: boolean }>`
  & > * {
    background-color: transparent;
    color: ${({ isDarkMode }) => getThemeColor(isDarkMode)};
    border: 1px solid ${({ isDarkMode }) => getThemeColor(isDarkMode)};
  }

  &:hover > * {
    background-color: ${({ isDarkMode }) => getThemeColor(isDarkMode)};
    color: ${({ isDarkMode }) => getThemeColor(!isDarkMode)};
    border: 2px solid;
  }
`
