import React from 'react'
import { List, FieldsWrapper, Title, Wrapper } from './step.style'

import Chip from '@/components/UI/Chip/Chip'
import Selector from '@/components/UI/Selector/Selector'
import { DealStatus } from '../quize.utils'

interface IProps {
  title: string
  nodes: Array<string>
  handleClick: (value: string) => void
  dealStatus?: DealStatus
  isSelector?: boolean
  dictionaries?: Array<string>
  isActiveNode?: boolean
}

function StepPattern({
  title,
  nodes,
  handleClick,
  dealStatus,
  isSelector,
  dictionaries,
  isActiveNode,
}: IProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <FieldsWrapper>
        {isSelector && (
          <Selector
            options={dictionaries || nodes}
            setStash={handleClick}
            selected={nodes}
            dealStatus={dealStatus}
          />
        )}
        <List>
          {nodes.map((item) => (
            <Chip
              key={item}
              onClick={() => handleClick(item)}
              isActiveNode={isActiveNode}
            >
              {item}
            </Chip>
          ))}
        </List>
      </FieldsWrapper>
    </Wrapper>
  )
}

export { StepPattern }
