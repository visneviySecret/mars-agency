import { ArrowLeft } from '@/assets/ArrowLeft'
import { ArrowRight } from '@/assets/ArrowRight'
import styled from 'styled-components'

interface IProps {
  leftClick: () => void
  rightClick: () => void
}

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: auto;
`

const buttonStyle = {
  border: 'none',
  background: 'none',
}

export const DualButtons = ({ leftClick, rightClick }: IProps) => {
  const handleLeft = () => {
    leftClick()
  }

  const handleRight = () => {
    rightClick()
  }

  return (
    <ButtonWrapper>
      <button onClick={handleLeft} style={buttonStyle}>
        <ArrowLeft />
      </button>
      <button onClick={handleRight} style={buttonStyle}>
        <ArrowRight />
      </button>
    </ButtonWrapper>
  )
}
