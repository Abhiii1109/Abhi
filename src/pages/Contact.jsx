import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Split text title animation
      const titleWords = titleRef.current.querySelectorAll('.word');
      gsap.from(titleWords, {
        opacity: 0,
        y: 120,
        rotateX: -90,
        stagger: 0.12,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 75%',
        }
      });

      // Info sections stagger
      gsap.from('.info-item', {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.info-container',
          start: 'top 80%',
        }
      });

      // Social links animation
      gsap.from('.social-link', {
        opacity: 0,
        scale: 0,
        rotation: 180,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.social-container',
          start: 'top 85%',
        }
      });

      // Marquee infinite scroll
      const marquee = marqueeRef.current;
      const marqueeContent = marquee.querySelector('.marquee-content');
      
      gsap.to(marqueeContent, {
        x: '-50%',
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 py-20">
        <div className="max-w-8xl mx-auto w-full">
          
          {/* Title */}
          <div ref={titleRef} className="mb-16 md:mb-24">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight">
              <div className="word">LET'S CREATE</div>
              <div className="word">SOMETHING</div>
              <div className="word">AMAZING</div>
            </h2>
          </div>

          {/* Info Grid */}
          <div className="info-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
            
            {/* Email */}
            <div className="info-item">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3 md:mb-4">Email</p>
              <a 
                href="mailto:abhiprajapati1106@gmail.com" 
                className="text-lg md:text-xl lg:text-2xl hover:text-gray-300 transition-colors break-words block"
              >
                abhiprajapati1106@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="info-item">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3 md:mb-4">Phone</p>
              <a 
                href="tel:+917096585858" 
                className="text-lg md:text-xl lg:text-2xl hover:text-gray-300 transition-colors block"
              >
                +91 709658585
              </a>
            </div>

            {/* Location */}
            <div className="info-item">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3 md:mb-4">Location</p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                Gujarat, India
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="info-item mb-20 md:mb-28">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhiprajapati1106@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group relative overflow-hidden"
            >
              <span className="block px-12 py-5 bg-white text-black text-lg md:text-xl font-medium relative z-10 transition-colors r:text-white">
                Start a Project
              </span>
              
            </a>
          </div>

          {/* Social Links */}
          <div className="social-container">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Connect</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group"
              >
                <span className="block px-6 py-3 border border-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group"
              >
                <span className="block px-6 py-3 border border-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                  GitHub
                </span>
              </a>
            
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div ref={marqueeRef} className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#D3FD50] py-4 md:py-5">
        <div className="marquee-content flex whitespace-nowrap text-black text-xl md:text-3xl font-medium">
          <span className="inline-block mx-6 md:mx-8">AVAILABLE FOR FREELANCE</span>
          <span className="inline-block mx-6 md:mx-8">•</span>
          <span className="inline-block mx-6 md:mx-8">OPEN TO OPPORTUNITIES</span>
          <span className="inline-block mx-6 md:mx-8">•</span>
          <span className="inline-block mx-6 md:mx-8">AVAILABLE FOR FREELANCE</span>
          <span className="inline-block mx-6 md:mx-8">•</span>
          <span className="inline-block mx-6 md:mx-8">OPEN TO OPPORTUNITIES</span>
          <span className="inline-block mx-6 md:mx-8">•</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
