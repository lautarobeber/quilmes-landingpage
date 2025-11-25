import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from '../assets/images/dogimage.png';

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: 'power3.out'
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  const words = ['sabor', 'del', 'encuentro'];

  return (
    <div 
      id="page1" 
      className="w-screen h-screen flex justify-center items-center relative bg-gray-100"
    >
      <h1
        ref={headingRef}
        className="w-[60vw] font-anton text-[13vw] font-black text-center uppercase leading-[12vw] text-[#0D497F] flex justify-center gap-x-6 gap-y-2 flex-wrap"
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <span className="hero-word inline-block">
              {word}
            </span>
          </span>
        ))}
      </h1>
      <img 
        id="page1_Logo_image"
        src={Logo}
        alt="Logo"
        className="h-[15vh] absolute top-[15%] left-[22.5%] -rotate-[15deg]"
      />
    </div>
  );
};

export default Hero;
