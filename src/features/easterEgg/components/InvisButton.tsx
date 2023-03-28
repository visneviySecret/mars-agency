import { setWord, selectWord } from '@/redux/wordSlice'
import React, { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { callTheBats } from '@/features/easterEgg/easterEgg'

const Button = styled.span``

const InvisButton = ({
  value,
  children,
}: {
  value: string
  children: ReactNode
}) => {
  const stateRedux = useSelector(selectWord)
  const dispatch = useDispatch()

  const handleClick = () => {
    const newLitter = value.toLowerCase()
    if (!checkLitters(newLitter)) {
      dispatch(setWord(''))
      return
    }
    dispatch(setWord(stateRedux + newLitter))
  }

  const checkLitters = (litter: string) => {
    switch (litter) {
      case 'б':
        return true
      case 'э':
        return stateRedux.includes('б')
      case 'т':
        return stateRedux.includes('э')
      case 'с':
        if (stateRedux.includes('т')) {
          callTheBats()
          return
        }
        return
      default:
        return
    }
  }

  return <Button onClick={handleClick}>{children}</Button>
}

export default InvisButton
