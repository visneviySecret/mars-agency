import React, { useState } from 'react'
import { Input, Component, Wrapper } from './Selector.style'
import { useTheme } from 'next-themes'
import { SelectorArrow } from '../SelectorArrow/SelectorArrow'
import Options from './Components/Options'
import { DealStatus } from '@/components/Modals/BuyModal/Components/quize.utils'
import { useOutsideClick } from '@/hooks/useOutsideClick'

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
  const [isShowOption, setIsShowOption] = useState(false)
  const [searchingOptions, setSearchingOptions] = useState(options)
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'
  const placeHolder = dealStatus === DealStatus.buy ? 'Выбрать' : 'Название'

  const handleClick = () => {
    setIsShowOption(true)
  }

  const handleOption = (value: string) => {
    setStash(value)
  }

  const handleChange = (value: string) => {
    const search = options.filter((option) => option.indexOf(value) !== -1)
    const result = search.length === 0 ? [value] : search
    setSearchingOptions(result)
  }

  const stopShow = () => {
    setIsShowOption(false)
  }
  const ref = useOutsideClick(stopShow)

  return (
    <Component>
      <Wrapper ref={ref}>
        <Input
          type="text"
          placeholder={placeHolder}
          onChange={(e) => handleChange(e.target.value)}
          theme={theme}
          onClick={handleClick}
        />
        <SelectorArrow isActive={isShowOption} isDarkMode={isDarkMode} />
        {isShowOption && (
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
