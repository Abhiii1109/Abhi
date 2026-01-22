import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useMemo } from 'react'

const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  const containerRef = useRef(null)

  // Split text into words
  const splitText = (text) => {
    return text.split(' ').map((word, index) => ({
      value: word,
      index: index
    }))
  }

  useGSAP(() => {
    // Only animate words that are not skill badges
    const words = Array.from(containerRef.current.querySelectorAll('.word')).filter(
      word => !word.classList.contains('skill-badge')
    )
    
    words.forEach((word, index) => {
      gsap.fromTo(
        word,
        { 
          opacity: 0.2,
          color: '#52525b', // zinc-600
        },
        {
          opacity: 1,
          color: '#ffffff', // white
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  const Word = ({ children, className = '' }) => (
    <span className={`word inline-block mr-[0.35em] ${className}`}>
      {children}
    </span>
  )

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 lg:px-24 py-20 overflow-hidden"
    >
      <div className="max-w-6xl text-center space-y-10">
        {/* About Me Section */}
        <h1 className="text-[8vw] lg:text-[5vw] uppercase tracking-tight font-light leading-tight">
          <Word>About</Word>
          <Word>Me</Word>
        </h1>

        <div className="space-y-8 leading-relaxed">
          <p className="text-[5vw] lg:text-[2vw] font-light">
            <Word>Hi,</Word>
            <Word>I'm</Word>
            <Word className="font-semibold">Abhi</Word>
            <Word className="font-semibold">Prajapati,</Word>
            <Word>a</Word>
            <Word>passionate</Word>
            <Word className="font-semibold">Frontend</Word>
            <Word className="font-semibold">Developer</Word>
            <Word>dedicated</Word>
            <Word>to</Word>
            <Word>crafting</Word>
            <Word>dynamic</Word>
            <Word>and</Word>
            <Word>visually</Word>
            <Word>engaging</Word>
            <Word>web</Word>
            <Word>experiences</Word>
            <Word>with</Word>
            <Word>precision</Word>
            <Word>and</Word>
            <Word>creativity.</Word>
          </p>

          <p className="text-[5vw] lg:text-[2vw] font-light">
            <Word>I'm</Word>
            <Word>currently</Word>
            <Word>pursuing</Word>
            <Word>my</Word>
            <Word className="font-semibold">Bachelor</Word>
            <Word className="font-semibold">of</Word>
            <Word className="font-semibold">Computer</Word>
            <Word className="font-semibold">Applications</Word>
            <Word className="font-semibold">(BCA)</Word>
            <Word>at</Word>
            <Word className="font-semibold">Sardar</Word>
            <Word className="font-semibold">Patel</Word>
            <Word className="font-semibold">University,</Word>
            <Word className="font-semibold">Anand,</Word>
            <Word>which</Word>
            <Word>I</Word>
            <Word>started</Word>
            <Word>in</Word>
            <Word>2024.</Word>
            <Word>Alongside</Word>
            <Word>my</Word>
            <Word>academics,</Word>
            <Word>I'm</Word>
            <Word>constantly</Word>
            <Word>learning</Word>
            <Word>and</Word>
            <Word>exploring</Word>
            <Word>new</Word>
            <Word>technologies</Word>
            <Word>to</Word>
            <Word>strengthen</Word>
            <Word>my</Word>
            <Word>development</Word>
            <Word>skills.</Word>
          </p>

         
        </div>

        {/* Skills Section */}
        <div className="mt-24 space-y-8">
          <h2 className="text-[8vw] lg:text-[5vw] font-light uppercase tracking-tight">
            <Word>Skills</Word>
          </h2>

          <p className="text-[5vw] lg:text-[2vw] font-light leading-relaxed">
            <Word>I've</Word>
            <Word>developed</Word>
            <Word>a</Word>
            <Word>strong</Word>
            <Word>foundation</Word>
            <Word>in</Word>
            <Word>both</Word>
            <Word>front-end</Word>
            <Word>and</Word>
            <Word>programming</Word>
            <Word>fundamentals.</Word>
            <Word>My</Word>
            <Word>skill</Word>
            <Word>set</Word>
            <Word>includes</Word>
            <Word>modern</Word>
            <Word>tools</Word>
            <Word>and</Word>
            <Word>technologies</Word>
            <Word>that</Word>
            <Word>help</Word>
            <Word>me</Word>
            <Word>build</Word>
            <Word>efficient</Word>
            <Word>and</Word>
            <Word>visually</Word>
            <Word>appealing</Word>
            <Word>web</Word>
            <Word>applications.</Word>
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-[4.5vw] lg:text-[1.5vw] font-light mt-8">
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">HTML5</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">CSS3</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">Bootstrap</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">Tailwind CSS</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">JavaScript</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">React.js</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">C Language</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">C++ With DSA</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">Git</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">GitHub</span>
            <span className="word skill-badge bg-white text-black px-6 py-3 rounded-2xl inline-block">Firebase</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
