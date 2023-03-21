import React, { useState } from 'react'
import {
  SelectorComponent,
  SelectorWrapper,
  OptionsList,
  Option,
  ItemCursorWrapper,
  ItemCursor,
} from './Selector.style'
import { useTheme } from 'next-themes'
import CSS from 'csstype'

interface IProps {
  style?: CSS.Properties
  options: string[]
  setStash: (val: string[]) => void
}

export default function Selector({ style, options }: IProps) {
  const { theme } = useTheme()
  const [isActive, setIsActive] = useState(false)

  const isDarkMode = theme === 'dark'

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  const handleOption = (value: string) => {
    return value
  }

  return (
    <SelectorWrapper>
      <SelectorComponent theme={theme} style={style} onClick={handleClick}>
        Выбрать
      </SelectorComponent>
      {isActive && (
        <OptionsList>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOption(option)}>
              {option}
            </Option>
          ))}
        </OptionsList>
      )}
      <ItemCursorWrapper>
        <ItemCursor isDarkMode={isDarkMode} isActive={isActive} />
      </ItemCursorWrapper>
    </SelectorWrapper>
  )
}
