import React from 'react'
import { motion, useTransform } from 'motion/react'
import Reveal from './Reveal';

const Card = ({ index, texts, color, progress, range, targetScale }) => {

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className='flex justify-center items-center w-full h-screen sticky top-0'>
      <motion.div
        className='flex w-4/5 h-5/7 rounded-3xl relative'
        style={{ backgroundColor: color, top: `calc(-5% + ${index * 25}px)`, scale }}
      >
        <div className='flex flex-col space-y-4 items-center justify-center w-full p-8'>
          <div className='kalam-regular text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl space-y-4'>
            {
              texts.map((text, index) => <Reveal key={index}><p>{text}</p></Reveal>)
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card