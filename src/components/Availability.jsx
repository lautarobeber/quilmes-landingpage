import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import ipa from '../assets/images/ipa.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

const Availability = () => {
  return (
    <div 
      id="page5" 
      className="w-screen min-h-[80vh] flex flex-col justify-start items-center"
      data-scroll-section
    >
      <div className="w-screen h-[85vh] px-[5vw] flex items-center justify-evenly relative">
        <h1
          className="absolute inset-0 flex items-center justify-center text-[12vw] font-anton tracking-[0.6rem] uppercase text-[#0085CC]/15 pointer-events-none select-none"
          aria-hidden="true"
        >
          NUESTRA FORMACION
        </h1>
        {/* Bottle 1 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img 
            id="image11"
            src={image1}
            alt="On Top"
            className="w-[10vw]"
          />
          
        </div>

        {/* Bottle 2 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img 
            id="image22"
            src={image2}
            alt="22 oz Bottles"
            className="w-[10vw]"
          />
         
        </div>

        {/* Bottle 3 - IPA (Hidden initially) */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img 
            id="image33"
            src={ipa}
            alt="22 oz Bottles"
            className="w-[10vw] h-[47vh] opacity-0"
          />
         
        </div>

        {/* Bottle 4 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
          <img 
            id="image44"
            src={image3}
            alt="21 oz Bottles"
            className="w-[10vw]"
          />
          
        </div>

        {/* Bottle 5 */}
        <div className="w-[15vw] h-[60vh] flex flex-col items-center justify-center">
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
