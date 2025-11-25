import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductInfo from './components/ProductInfo';
import Mouthfeels from './components/Mouthfeels';
import FlavorProfile from './components/FlavorProfile';
import Availability from './components/Availability';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

import bottleImage from './assets/images/ipa.png';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    // Limpiar solo las transformaciones previas
    gsap.set("#bottle", { clearProps: "transform" });


    gsap.to('#bottle', {

      rotate: 0,
      scrollTrigger: {
        trigger: '#page1',
        start: 'bottom center',
        end: 'bottom center',
        scrub: 3,
       
      }
    });

    // Bottle scale + rotation animation for page 5
    gsap.to('#bottle', {
      scale: 0.75,

      scrollTrigger: {
        trigger: '#page3',
        start: 'center top',
        end: 'bottom bottom',
        scrub: 5,
       
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navigation />

      {/* Bottle Image - Fixed */}
      <img
        id="bottle"
        src={bottleImage}
        alt="IPA Bottle"
        className="fixed h-[95vh] top-0 left-[30%] z-[990] rotate-[30deg] pointer-events-none"
      />

      {/* Main Scroll Container */}
      <div
        id="main"
        className="w-screen min-h-screen bg-white"
      >
        <Hero />
        <ProductInfo />
        <Mouthfeels />
        {/* <FlavorProfile /> */}
        <Availability />
      {/*   <Recipes /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
