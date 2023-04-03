import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Color } from '@/utils/color'
import { useTheme } from 'next-themes'
import { useMediaQuery } from '@/hooks/useMedia'
import { breakPoints } from '@/utils/breakPoints'
import { blockScroll, unlockScroll } from '../hero/utils'

function useHeader() {
  const [ref, { width, height }] = useMeasure()
  const { theme } = useTheme()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)
  const [isOpenMenu, setIsOpeMenu] = useState(false)
  const [previousMenuState, setPreviousMenuState] = useState(false)
  const [delayedIsOpenMenu, setDelayedIsOpeMenu] = useState(false)
  const color = theme === 'dark' ? Color.WHITE : Color.GREY
  const handleMenu = () => {
    setIsOpeMenu((prev) => !prev)
    blockScroll()
    if (isOpenMenu) {
      return unlockScroll()
    }
  }

  const handleClose = () => {
    setIsOpeMenu(false)
    unlockScroll()
  }

  useEffect(() => {
    if (!isSmallScreen) handleClose()
  }, [isSmallScreen])

  useEffect(() => {
    setPreviousMenuState(true)
    setTimeout(() => {
      setDelayedIsOpeMenu(isOpenMenu)
    }, 0)
    setTimeout(() => {
      setPreviousMenuState(false)
    }, 500)
  }, [isOpenMenu])

  return {
    ref,
    width,
    height,
    theme,
    color,
    isOpenMenu,
    handleMenu,
    handleClose,
    previousMenuState,
    delayedIsOpenMenu,
  }
}

export default useHeader
