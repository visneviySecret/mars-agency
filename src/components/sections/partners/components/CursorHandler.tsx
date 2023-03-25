import React from 'react'
import styled from 'styled-components'

const CursorComponent = styled.div`
  z-index: 1000;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  translate: -3% -3%;
`

const LeftSide = styled.div`
  flex: 1;
  cursor: url('/public/ArrowLeft.svg'), pointer;
`
const RightSide = styled.div`
  cursor: url('/public/ArrowRight.svg'), pointer;
  flex: 1;
`

interface CursorProps {
  onClick: (value: string) => void
}

function CursorHandler({ onClick }: CursorProps) {
  const handleLeft = () => {
    onClick('left')
  }
  const handlRight = () => {
    onClick('right')
  }

  return (
    <CursorComponent>
      <LeftSide onClick={handleLeft} />
      <RightSide onClick={handlRight} />
    </CursorComponent>
  )
}

export default CursorHandler
