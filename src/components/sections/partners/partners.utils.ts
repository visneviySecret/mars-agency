import { useEffect, useState } from 'react'

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
  const [bankCount, setBankCount] = useState(0)
  const [developCount, setDevelopCount] = useState(0)
  const [isHovered, setIsHoverd] = useState('')

  const handleBankCount = () => {
    setBankCount((prev) => prev + 1)
  }

  const handleDevelopCount = () => {
    setDevelopCount((prev) => prev + 1)
  }

  const getBankImg = () => {
    return banks[Math.abs(bankCount) % 6].img
  }

  const getDevImg = () => {
    return developers[Math.abs(developCount) % 9].img
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
      handleBankCount()
    }, 3800)

    return () => {
      clearInterval(bankInterval)
    }
  }, [isHovered])

  useEffect(() => {
    if (isHovered === 'developer') return

    const devInterval = setInterval(() => {
      handleDevelopCount()
    }, 2500)

    return () => {
      clearInterval(devInterval)
    }
  }, [isHovered])

  return {
    bankCount,
    developCount,
    handleBankCount,
    handleDevelopCount,
    handleMouseEnter,
    handleMouseLeave,
    getBankImg,
    getDevImg,
  }
}
