import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    // Prevent body scroll when nav is open
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        // Cleanup function to ensure overflow is reset
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [navOpen])

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <>
            <style jsx>{`
                .moveLink {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(100%);
                    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                                transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: transform, opacity;
                    pointer-events: none;
                }

                .link:hover .moveLink {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: auto;
                }

                .moveX {
                    animation: marquee 8s linear infinite;
                    will-change: transform;
                    backface-visibility: hidden;
                    perspective: 1000px;
                    contain: layout style paint;
                }

                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-50%, 0, 0);
                    }
                }

                .link {
                    transition: all 0.3s ease;
                    contain: layout style paint;
                }

                /* Hardware acceleration and performance */
                .moveLink,
                .moveX {
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    -webkit-perspective: 1000px;
                    perspective: 1000px;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}</style>

            <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
                <div className='h-screen w-full fixed'>
                    <div className='h-full w-full flex'>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                    </div>
                </div>
                <div ref={fullNavLinksRef} className='relative'>
                    <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                        <div className=''>
                            <div className='lg:w-36 w-24'>
                                <Link className='w-full text-5xl text-white font-[font3]' to='/'>Abhi</Link>
                            </div>
                        </div>
                        <div onClick={() => setNavOpen(false)} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                            <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                            <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        </div>
                    </div>
                    
                    <div className='lg:py-7  md:  py-44'>
                        {/* Projects Link */}
                        <div className='link origin-top relative border-t-1 border-white overflow-hidden'>
                            <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Projets</h1>
                            <Link to='/projects' onClick={() => setNavOpen(false)}>
                                <div className='moveLink absolute text-black flex top-0 left-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center gap-4'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafted with Code & Design"</h2>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafted with Code & Design"</h2>
                                    </div>
                                    <div className='moveX flex items-center gap-4'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafted with Code & Design"</h2>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafted with Code & Design"</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* About Link */}
                        <Link to='/about' onClick={() => setNavOpen(false)}>
                            <div className='link origin-top relative border-t-1 border-white overflow-hidden'>
                                <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>About</h1>
                                <div className='moveLink absolute text-black flex top-0 left-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center gap-4'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafting Modern Web Experiences"</h2>
                                       
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafting Modern Web Experiences"</h2>

                                    </div>
                                    <div className='moveX flex items-center gap-4'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafting Modern Web Experiences"</h2>

                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Crafting Modern Web Experiences"</h2>
                                   
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Contact Link */}
                        <Link to='/Contact' onClick={() => setNavOpen(false)}>
                            <div className='link origin-top relative border-t-1 border-b-1 border-white overflow-hidden'>
                                <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Contact</h1>
                                <div className='moveLink absolute text-black flex top-0 left-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center gap-4'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Let's Build Something Awesome Together"</h2>
                
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Let's Build Something Awesome Together"</h2>
                                        
                                    </div>
                                    <div className='moveX flex items-center gap-4'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Let's Build Something Awesome Together"</h2>
                                      
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>"Let's Build Something Awesome Together"</h2>
                                     
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullScreenNav
