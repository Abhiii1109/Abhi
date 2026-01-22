import React, { useRef } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Hero text animation
    gsap.from('.hero-line', {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3
    })

    // Bottom buttons animation
    gsap.from('.bottom-link', {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      delay: 1.2
    })
  }, [])

  return (
    <div ref={containerRef} className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home