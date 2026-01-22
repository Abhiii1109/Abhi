import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {
    const navGreenRef = useRef(null)
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    const handleMouseEnter = () => {
        // Faster animation - 0.2s instead of 0.4s
        gsap.to(navGreenRef.current, {
            height: '100%',
            duration: 0.2,
            ease: 'power3.out'
        })
        
        // Animate lines with stagger
        gsap.to([line1Ref.current, line2Ref.current], {
            scaleX: 1.2,
            stagger: 0.03,
            duration: 0.2,
            ease: 'power3.out'
        })
    }

    const handleMouseLeave = () => {
        gsap.to(navGreenRef.current, {
            height: '0%',
            duration: 0.2,
            ease: 'power3.in'
        })
        
        gsap.to([line1Ref.current, line2Ref.current], {
            scaleX: 1,
            stagger: 0.03,
            duration: 0.2,
            ease: 'power3.in'
        })
    }

    const handleClick = () => {
        setNavOpen(true)
    }

    return (
        <div className='z-40 flex fixed top-0 w-full items-start justify-between pointer-events-none'>
            <div className='lg:p-5 p-2 pointer-events-auto'>
                <div className='lg:w-36 w-24'>
                    <Link 
                        className='w-full text-5xl text-white font-[font3] block' 
                        to='/'
                        onClick={() => setNavOpen(false)}
                    >
                        Abhi
                    </Link>
                </div>
            </div>
            
            <div 
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48 cursor-pointer overflow-hidden pointer-events-auto'
            >
                <div 
                    ref={navGreenRef} 
                    className='bg-[#D3FD50] absolute bottom-0 h-0 w-full'
                    style={{ willChange: 'height' }}
                />
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5 z-10'>
                    <div 
                        ref={line1Ref}
                        className="lg:w-18 w-12 h-0.5 bg-white origin-right"
                        style={{ willChange: 'transform' }}
                    />
                    <div 
                        ref={line2Ref}
                        className="lg:w-10 w-6 h-0.5 bg-white origin-right"
                        style={{ willChange: 'transform' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
