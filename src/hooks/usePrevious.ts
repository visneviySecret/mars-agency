import { useState } from 'react'

export function usePrevious(value: any) {
  const [tuple, setTuple] = useState([null, value])

  if (tuple[1] !== value) {
    setTuple([tuple[1], value])
  }
  return tuple[0]
}
