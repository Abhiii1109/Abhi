import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-light mt-72 lg:mt-0 pt-5 text-center'>
            <div className='hero-line lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                 I Am 
            </div>
            <div className='hero-line lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                a
                <div className='h-[7vw] w-[16vw] rounded-full -mt- overflow-hidden '>
                    <Video />
                </div>
                frontend 
            </div>
            <div className='hero-line lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
           developer    
            </div>
        </div>
    )
}

export default HomeHeroText