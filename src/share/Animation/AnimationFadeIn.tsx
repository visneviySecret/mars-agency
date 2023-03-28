import React, { ReactNode, useEffect } from 'react'
import { motion } from 'framer-motion'
import CSS from 'csstype'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimationProps {
  children: ReactNode
  delay?: number
  style?: CSS.Properties
}
function AnimationFadeIn({ children, delay = 0.2, style }: AnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      variants={variants}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default AnimationFadeIn
