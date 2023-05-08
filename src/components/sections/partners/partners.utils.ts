import { usePrevious } from '@/hooks/usePrevious'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { useMediaQuery } from '@/hooks/useMedia'
import { breakPoints } from '@/utils/breakPoints'
import BankImg1 from '/public/partners/bank1.png'
import BankImg2 from '/public/partners/bank2.png'
import BankImg3 from '/public/partners/bank3.png'
import BankImg4 from '/public/partners/bank4.png'
import BankImg5 from '/public/partners/bank5.png'
import BankImg6 from '/public/partners/bank6.png'
import DevImg1 from '/public/partners/Develop1.png'
import DevImg2 from '/public/partners/Develop2.png'
import DevImg3 from '/public/partners/Develop3.png'
import DevImg4 from '/public/partners/Develop4.png'
import DevImg5 from '/public/partners/Develop5.png'
import DevImg6 from '/public/partners/Develop6.png'
import DevImg7 from '/public/partners/Develop7.png'
import DevImg8 from '/public/partners/Develop8.png'
import DevImg9 from '/public/partners/Develop9.png'

interface VariantProps {
  [key: string]: number
}

const banks = [
  { img: BankImg1 },
  { img: BankImg2 },
  { img: BankImg3 },
  { img: BankImg4 },
  { img: BankImg5 },
  { img: BankImg6 },
]

const developers = [
  { img: DevImg1 },
  { img: DevImg2 },
  { img: DevImg3 },
  { img: DevImg4 },
  { img: DevImg5 },
  { img: DevImg6 },
  { img: DevImg7 },
  { img: DevImg8 },
  { img: DevImg9 },
]

export const usePartners = () => {
  const [ref, { width }] = useMeasure()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)
  const [bankCount, setBankCount] = useState(0)
  const [devCount, setDevelopCount] = useState(0)
  const prevBankCount = usePrevious(bankCount)
  const prevDevCount = usePrevious(devCount)
  const bankDirection = bankCount > prevBankCount ? 1 : -1
  const devDirection = devCount > prevDevCount ? 1 : -1
  const [isHovered, setIsHoverd] = useState('')
  const { theme } = useTheme()

  const handleBankCount = (direction?: string) => {
    const increment = direction === 'right' ? 1 : -1
    setBankCount((prev) => prev + increment)
  }

  const handleDevelopCount = (direction?: string) => {
    const increment = direction === 'right' ? 1 : -1
    setDevelopCount((prev) => prev + increment)
  }

  const getBankImg = () => {
    return banks[Math.abs(bankCount) % 6].img
  }

  const getDevImg = () => {
    return developers[Math.abs(devCount) % 9].img
  }

  const handleMouseEnter = (value: string) => {
    setIsHoverd(value)
  }

  const handleMouseLeave = () => {
    setIsHoverd('')
  }

  useEffect(() => {
    if (isHovered === 'bank') return
    const bankInterval = setInterval(() => {
      handleBankCount('right')
    }, 2345)

    return () => {
      clearInterval(bankInterval)
    }
  }, [isHovered])

  useEffect(() => {
    if (isHovered === 'developer') return

    const devInterval = setInterval(() => {
      handleDevelopCount('right')
    }, 3456)

    return () => {
      clearInterval(devInterval)
    }
  }, [isHovered])

  const bankVariants = {
    enter: ({ bankDirection, width }: VariantProps) => ({
      x: bankDirection * width,
    }),
    center: { x: 0 },
    exit: ({ bankDirection, width }: VariantProps) => ({
      x: bankDirection * -width,
    }),
  }
  const devVariants = {
    enter: ({ devDirection, width }: VariantProps) => ({
      x: devDirection * width,
    }),
    center: { x: 0 },
    exit: ({ devDirection, width }: VariantProps) => ({
      x: devDirection * -width,
    }),
  }

  return {
    ref,
    width,
    theme,
    bankCount,
    developCount: devCount,
    devDirection,
    bankDirection,
    handleBankCount,
    handleDevelopCount,
    handleMouseEnter,
    handleMouseLeave,
    isSmallScreen,
    bankVariants,
    devVariants,
    getBankImg,
    getDevImg,
  }
}
