import React, { ReactNode } from 'react'
import { List, FieldsWrapper, Title, Wrapper } from './step.style'

import Chip from '@/components/UI/Chip/Chip'
import Selector from '@/components/UI/Selector/Selector'
import { DealStatus } from '../quize.utils'
import TextField from '@/components/UI/TextField/TextField'

interface IProps {
  children?: ReactNode
  nodes?: Array<string>
  handleClick?: (value: string) => void
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  title?: string
  textFieldValue?: string
  dealStatus?: DealStatus
  isSelector?: boolean
  dictionaries?: Array<string>
  isActiveNode?: boolean
}

function StepPattern({
  children,
  title,
  nodes,
  handleClick,
  handleChange,
  textFieldValue,
  dealStatus,
  isSelector,
  dictionaries,
  isActiveNode,
}: IProps) {
  return (
    <Wrapper>
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
            nodes?.map((item) => (
              <Chip
                key={item}
                onClick={() => handleClick(item)}
                isActiveNode={isActiveNode}
              >
                {item}
              </Chip>
            ))}
        </List>
        {textFieldValue && handleChange && (
          <TextField
            name={'area'}
            placeholder={textFieldValue}
            value={textFieldValue}
            onChange={handleChange}
            isQuize
            style={{ marginTop: nodes?.length && '30px' }}
          />
        )}
        {children}
      </FieldsWrapper>
    </Wrapper>
  )
}

export { StepPattern }
