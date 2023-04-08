import { ArrowLeft } from '@/assets/Arrows/ArrowLeft'
import { ArrowRight } from '@/assets/Arrows/ArrowRight'
import React from 'react'
import useMeasure from 'react-use-measure'
import styled from 'styled-components'

const CursorComponent = styled.div<{ isSmallScreen: boolean }>`
  z-index: 1000;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: ${({ isSmallScreen }) => isSmallScreen && 'center'};
  width: ${({ isSmallScreen }) => (isSmallScreen ? '48px' : '100%')};
  height: ${({ isSmallScreen }) => (isSmallScreen ? '23px' : '100%')};
  translate: ${({ isSmallScreen }) => !isSmallScreen && '0% -4%'};
  right: ${({ isSmallScreen }) => isSmallScreen && '30px'};
`

const LeftSide = styled.div`
  flex: 1;
  min-width: clamp(18px, 4vw, 24px);
`
export const RightSide = styled.div`
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

  const handleMouseEnterRight = () => {
    document.body.style.cursor = 'url("/ArrowRight.svg") 52 52, auto'
  }
  const handleMouseEnterLeft = () => {
    document.body.style.cursor = 'url("/ArrowLeft.svg") 52 52, auto'
  }

  const handleMouseLeave = () => {
    document.body.style.cursor = 'auto'
  }

  return (
    <CursorComponent isSmallScreen={isSmallScreen}>
      <LeftSide
        onClick={handleLeft}
        ref={ref}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeave}
      >
        {isSmallScreen && <ArrowLeft width={width} />}
      </LeftSide>
      <RightSide
        onClick={handlRight}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeave}
      >
        {isSmallScreen && <ArrowRight width={width} />}
      </RightSide>
    </CursorComponent>
  )
}

export default CursorHandler
