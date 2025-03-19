import React, { useRef } from 'react'
import { messages } from '../data'
import Card from './Card'
import { motion, useScroll } from 'motion/react'

const CardStack = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <motion.div ref={container} className='relative flex flex-col justify-center items-center w-full h-auto'>
        {
          messages.map((message, index) => {
            const targetScale = 1 - ((messages.length - index) * 0.05);
            return <Card key={index} index={index} {...message} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
          })
        }
      </motion.div>
  )
}

export default CardStack