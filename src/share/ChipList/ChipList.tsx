import Chip from '@/components/UI/Chip/Chip'
import { indents } from '@/utils/indents'
import React from 'react'
import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${indents.indent10};
`

interface IProps {
  nodes: Array<string>
  selectNode: (value: string) => void
  selected: Array<string>
}

function ChipList({ nodes, selectNode, selected }: IProps) {
  return (
    <List>
      {nodes.map((item: string, index) => {
        const newOrder =
          (item === 'Планировка' && 7) ||
          (item === 'Объекты без ремонта' && 4) ||
          (item === 'Новостройки в эксплуатации' && 5) ||
          (item === 'Объекты стоимостью ниже рыночной' && 3) ||
          index

        const isActiveNode = selected.indexOf(item) !== -1
        return (
          <Chip
            key={item}
            onClick={() => selectNode(item)}
            order={newOrder}
            isActiveNode={isActiveNode}
          >
            {item}
          </Chip>
        )
      })}
    </List>
  )
}

export default ChipList
