import React, { useState } from 'react'
import { Input, Component, Wrapper } from './Selector.style'
import { useTheme } from 'next-themes'
import { ArrowCursor } from '../ArrowCursor/ArrowCursor'
import Options from './Components/Options'
import { DealStatus } from '@/components/Modals/quize/quize.utils'

interface IProps {
  options: string[]
  selected: string[]
  setStash: (val: string) => void
  dealStatus?: DealStatus
}

export default function Selector({
  options,
  selected,
  setStash,
  dealStatus,
}: IProps) {
  const [isActive, setIsActive] = useState(false)
  const [searchingOptions, setSearchingOptions] = useState(options)
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'
  const placeHolder = dealStatus === DealStatus.buy ? 'Выбрать' : 'Название'

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  const handleOption = (value: string) => {
    setStash(value)
  }

  const handleChange = (value: string) => {
    setIsActive(true)
    const search = options.filter((option) => option.indexOf(value) !== -1)
    const result = search.length === 0 ? [value] : search
    setSearchingOptions(result)
  }

  return (
    <Component>
      <Wrapper>
        <Input
          type="text"
          placeholder={placeHolder}
          onChange={(e) => handleChange(e.target.value)}
          theme={theme}
          onClick={handleClick}
        />
        <ArrowCursor isActive={isActive} isDarkMode={isDarkMode} />
        {isActive && (
          <Options
            options={searchingOptions}
            selected={selected}
            handleOption={handleOption}
            isDarkMode={isDarkMode}
          />
        )}
      </Wrapper>
    </Component>
  )
}
