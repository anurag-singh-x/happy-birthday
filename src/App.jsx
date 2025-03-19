import './App.css'
import { motion } from 'motion/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useState } from 'react'
import { CakeIcon } from '@heroicons/react/16/solid'
import CardStack from './components/CardStack'
import Spotify from './components/Spotify'
import Reveal from './components/Reveal'

const App = () => {

  const [dotLottie, setDotLottie] = useState(null);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  }

  const play = () => {
    if (dotLottie) {
      dotLottie.stop();
      dotLottie.play();
    }
  }

  return (
    <div className='flex-row justify-center items-center w-full h-auto bg-[url("/sunflower_3.jpg")] bg-cover bg-center bg-fixed'>
      <div className='absolute w-full h-screen'>
        <DotLottieReact
          src='/confetti.lottie'
          dotLottieRefCallback={dotLottieRefCallback}
          renderConfig={{
            freezeOnOffscreen: false
          }}
          className='h-full w-auto'
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{
          width: 75,
          height: 75,
          borderRadius: "50%",
        }}
        className='justify-center items-center absolute bottom-10 right-10 z-2 bg-yellow-600 hidden md:flex'
        onClick={play}
      >
        <CakeIcon className='size-8' />
      </motion.button>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='text-center'>
          <p className='text-yellow-500 dancing-script-font text-6xl md:text-7xl lg:text-8xl xl:text-9xl mix-blend-difference'>
            {"Happy Birthday!".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: index * 0.1, // Wave effect
                }}
                className='inline-block'
              >
                {char}
              </motion.span>
            ))}
          </p>
          <p className='text-yellow-500 dancing-script-font text-9xl mix-blend-hard-light imperial-script-regular'>
            Khushi
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <Reveal className={'w-full md:w-3/5'}>
          <div className='flex w-full h-full'>
            <CardStack />
          </div>
        </Reveal>
        <Reveal className={'w-full md:w-2/5'}>
          <div className='flex justify-center items-center w-full h-screen sticky top-0'>
            <Spotify />
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default App
