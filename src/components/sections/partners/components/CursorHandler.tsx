import { ArrowLeft } from '@/assets/ArrowLeft'
import { ArrowRight } from '@/assets/ArrowRight'
import React from 'react'
import useMeasure from 'react-use-measure'
import styled from 'styled-components'

const CursorComponent = styled.div<{ isSmallScreen: boolean }>`
  z-index: 1000;
  position: absolute;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: ${({ isSmallScreen }) => isSmallScreen && 'center'};
  width: ${({ isSmallScreen }) => (isSmallScreen ? '48px' : '100%')};
  height: ${({ isSmallScreen }) => (isSmallScreen ? '23px' : '100%')};
  translate: ${({ isSmallScreen }) => !isSmallScreen && '0% -4%'};
  right: ${({ isSmallScreen }) => isSmallScreen && '30px'};
`

const LeftSide = styled.div`
  flex: 1;
  cursor: url('/public/ArrowLeft.svg'), pointer;
  min-width: clamp(18px, 4vw, 24px);
`
const RightSide = styled.div`
  cursor: url('/public/ArrowRight.svg'), pointer;
  flex: 1;
  min-width: clamp(18px, 4vw, 24px);
`

interface CursorProps {
  onClick: (value: string) => void
  isSmallScreen: boolean
}

function CursorHandler({ onClick, isSmallScreen }: CursorProps) {
  const [ref, { width }] = useMeasure()

  const handleLeft = () => {
    onClick('left')
  }
  const handlRight = () => {
    onClick('right')
  }

  return (
    <CursorComponent isSmallScreen={isSmallScreen}>
      <LeftSide onClick={handleLeft} ref={ref}>
        {isSmallScreen && <ArrowLeft width={width} />}
      </LeftSide>
      <RightSide onClick={handlRight}>
        {isSmallScreen && <ArrowRight width={width} />}
      </RightSide>
    </CursorComponent>
  )
}

export default CursorHandler
