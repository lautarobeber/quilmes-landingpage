import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import ipa from '../assets/images/ipa.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

const Availability = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          once: true
        }
      });

      tl.fromTo(
        '.availability-word',
        { xPercent: -120, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.5
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="page5" 
      className="w-screen min-h-[80vh] flex flex-col justify-start items-center"
      data-scroll-section
    >
      <div className="w-screen h-[85vh] px-[5vw] flex items-center justify-evenly relative">
        <h1
          ref={titleRef}
          className="absolute inset-0 flex flex-col items-start justify-center gap-10 text-[12vw] font-anton tracking-[0.6rem] uppercase text-[#0085CC]/15 pointer-events-none select-none z-0 pl-[5vw]"
          aria-hidden="true"
        >
          <span className="overflow-hidden">
            <span className="availability-word inline-block">NUESTRA</span>
          </span>
          <span className="overflow-hidden">
            <span className="availability-word inline-block">FORMACION</span>
          </span>
        </h1>
        {/* Bottle 1 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center relative z-10">
          <img 
            id="image11"
            src={image1}
            alt="On Top"
            className="w-[10vw]"
          />
          
        </div>

        {/* Bottle 2 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center relative z-10">
          <img 
            id="image22"
            src={image2}
            alt="22 oz Bottles"
            className="w-[10vw]"
          />
         
        </div>

        {/* Bottle 3 - IPA (Hidden initially) */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center relative z-10 ">
          <img 
            id="image33"
            src={ipa}
            alt="22 oz Bottles"
            className="w-[10vw] h-[47vh] opacity-0 " 
          />
         
        </div>

        {/* Bottle 4 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center relative z-10">
          <img 
            id="image44"
            src={image3}
            alt="21 oz Bottles"
            className="w-[10vw]"
          />
          
        </div>

        {/* Bottle 5 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center relative z-10">
          <img 
            id="image55"
            src={image4}
            alt="33 oz Bottles"
            className="w-[10vw]"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Availability;
