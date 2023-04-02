import React, { ReactNode } from 'react'
import { List, FieldsWrapper, Title, Wrapper } from './step.style'

import Chip from '@/components/UI/Chip/Chip'
import Selector from '@/components/UI/Selector/Selector'
import { DealStatus } from '../quize.utils'
import TextField from '@/components/UI/TextField/TextField'
import { useTheme } from 'next-themes'
import { Theme } from '@/components/UI/Button/Button.utils'

interface IProps {
  children?: ReactNode
  title?: string
  name?: string
  nodes?: Array<string>
  selected?: Array<string>
  dictionaries?: Array<string>
  handleClick?: (value: string) => void
  handleChange?: (key: string, value: string) => void
  textFieldValue?: string
  placeholder?: string
  dealStatus?: DealStatus
  isSelector?: boolean
  isActiveNode?: boolean
  isReset?: boolean
}

function StepPattern({
  children,
  title,
  name,
  nodes,
  selected,
  dictionaries,
  handleClick,
  handleChange,
  textFieldValue,
  placeholder,
  dealStatus,
  isSelector,
}: IProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Title>{title}</Title>
      <FieldsWrapper>
        {isSelector && handleClick && (
          <Selector
            options={dictionaries || nodes || []}
            setStash={handleClick}
            selected={nodes || []}
            dealStatus={dealStatus}
          />
        )}
        <List>
          {handleClick &&
            nodes?.map((item: string, index) => {
              const isActiveNode = selected && selected.indexOf(item) !== -1
              const newOrder =
                (item === 'Планировка' && 7) ||
                (item === 'Объекты без ремонта' && 4) ||
                (item === 'Новостройки в эксплуатации' && 5) ||
                (item === 'Объекты стоимостью ниже рыночной' && 3) ||
                index
              return (
                <Chip
                  key={item}
                  onClick={() => handleClick(item)}
                  order={newOrder}
                  isActiveNode={isActiveNode || false}
                >
                  {item}
                </Chip>
              )
            })}
        </List>
        {/* {handleChange && placeholder && (
          <TextField
            name={name || ''}
            type="tel"
            placeholder={placeholder}
            value={textFieldValue || ''}
            onChange={handleChange}
            isQuize
            style={{ marginTop: nodes?.length && '30px' }}
          />
        )} */}
        {children}
      </FieldsWrapper>
    </Wrapper>
  )
}

export { StepPattern }
