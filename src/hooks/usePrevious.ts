import { useState } from 'react'

export function usePrevious(value: number) {
  const [tuple, setTuple] = useState([0, value])

  if (tuple[1] !== value) {
    setTuple([tuple[1], value])
  }
  return tuple[0]
}
