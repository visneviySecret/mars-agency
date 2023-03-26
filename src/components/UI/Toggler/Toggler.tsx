import { Color } from '@/utils/color'
import { Theme } from '@/utils/helpers/getThemeColors'
import { useTheme } from 'next-themes'
import React from 'react'
import styled from 'styled-components'

const getThemeColor = (theme: Theme) => {
  return theme === Theme.light ? Color.GREY : Color.WHITE
}

const Wrapper = styled.div<{ theme: Theme }>`
  position: relative;
  min-width: 46px;
  max-width: 46px;
  height: 25px;
  border: 1px solid ${({ theme }) => getThemeColor(theme)};
  border-radius: 20px;

  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const Ball = styled.div<{ theme: Theme }>`
  position: absolute;
  inset: 2px;
  width: 20px;
  height: 20px;
  border-radius: 20px;

  background-color: ${({ theme }) => getThemeColor(theme)};

  translate: ${({ theme }) => theme === Theme.dark && '20px'};
  transition: all 0.2s ease;
`

function Toggler() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <Wrapper theme={theme} onClick={handleTheme}>
      <Ball theme={theme} />
    </Wrapper>
  )
}

export default Toggler
