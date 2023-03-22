import React from 'react'
import { CheckArrowBlack } from '@/assets/Icons/checkArrow'
import { Option, OptionsList } from './Options.style'

interface OptionsProps {
  options: Array<string>
  selected: Array<string>
  handleOption: (value: string) => void
}

function Options({ options, selected, handleOption }: OptionsProps) {
  return (
    <OptionsList>
      {options.map((option, index) => {
        const isActiveOption = selected.indexOf(option) !== -1
        return (
          <Option
            key={index}
            onClick={() => handleOption(option)}
            isActive={isActiveOption}
          >
            {isActiveOption && <CheckArrowBlack />}
            <span>{option}</span>
          </Option>
        )
      })}
    </OptionsList>
  )
}

export default Options
