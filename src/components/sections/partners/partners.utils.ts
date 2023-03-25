import { usePrevious } from '@/hooks/usePrevious'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

interface VariantProps {
  [key: string]: number
}

const banks = [
  { img: '/partners/bank1.png' },
  { img: '/partners/bank2.png' },
  { img: '/partners/bank3.png' },
  { img: '/partners/bank4.png' },
  { img: '/partners/bank5.png' },
  { img: '/partners/bank6.png' },
]

const developers = [
  { img: '/partners/Develop1.png' },
  { img: '/partners/Develop2.png' },
  { img: '/partners/Develop3.png' },
  { img: '/partners/Develop4.png' },
  { img: '/partners/Develop5.png' },
  { img: '/partners/Develop6.png' },
  { img: '/partners/Develop7.png' },
  { img: '/partners/Develop8.png' },
  { img: '/partners/Develop9.png' },
]

export const usePartners = () => {
  const [ref, { width }] = useMeasure()
  const [bankCount, setBankCount] = useState(0)
  const [devCount, setDevelopCount] = useState(0)
  const prevBankCount = usePrevious(bankCount)
  const prevDevCount = usePrevious(devCount)
  const bankDirection = bankCount > prevBankCount ? 1 : -1
  const devDirection = devCount > prevDevCount ? 1 : -1
  const [isHovered, setIsHoverd] = useState('')
  const { theme } = useTheme()

  const handleBankCount = (direction: string) => {
    const increment = direction === 'right' ? 1 : -1
    setBankCount((prev) => prev + increment)
  }

  const handleDevelopCount = (direction: string) => {
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
      // handleBankCount()
    }, 4444)

    return () => {
      clearInterval(bankInterval)
    }
  }, [isHovered])

  useEffect(() => {
    if (isHovered === 'developer') return

    const devInterval = setInterval(() => {
      // handleDevelopCount()
    }, 3333)

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
    bankVariants,
    devVariants,
    getBankImg,
    getDevImg,
  }
}
