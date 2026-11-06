'use client'

import React from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  y?: number
  delay?: number
}

const Reveal = ({ children, y = 24, delay = 0 }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal