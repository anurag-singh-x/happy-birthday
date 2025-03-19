import { motion, useInView } from 'motion/react'
import React, { useRef } from 'react'

const Reveal = ({ children, className }) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 1, delay: 0.15, ease: "backInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal