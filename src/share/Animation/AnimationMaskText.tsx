import React, { ReactNode, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimationProps {
  children: ReactNode
  delay?: number
}
function AnimationMaskText({ children, delay = 0.2 }: AnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { y: 15, opacity: 1 },
    hidden: { y: 200, opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ y: 70, opacity: 0 }}
      animate={controls}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: 'easeOut',
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default AnimationMaskText
