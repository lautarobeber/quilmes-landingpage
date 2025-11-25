import greenSplat from '../assets/images/Green-LSS.png';
import blackSplat from '../assets/images/splat-black.png';
 import masonJar from '../assets/images/LittleSumpin_MasonJar_Photo-671x1024.png';

const FlavorProfile = () => {
  return (
    <div 
      id="page5" 
      className="w-screen h-screen flex relative gap-[5vw]"
      data-scroll-section
    >
      {/* Tropical */}
      <div className="relative w-fit h-fit">
        <img 
          src={greenSplat}
          alt="Tropical"
          className="w-[15vw] mt-[2vh] ml-[11vw] bg-red-500"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h4 className="font-anton border-b-2 border-black uppercase mb-2">
            tropical
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum accusamus placeat 
            distinctio iusto exercitationem labore nulla atque temporibus beatae?
          </p>
        </div>
      </div>

      {/* Pink */}
      <div className="relative w-fit h-fit">
        <img 
          src={greenSplat}
          alt="IPA"
          className="w-[24vw] mt-[25vh] ml-[-5vw]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h4 className="font-anton border-b-2 border-black uppercase mb-2">
            pink
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum accusamus placeat 
            distinctio iusto exercitationem labore nulla atque temporibus beatae?
          </p>
        </div>
      </div>

      {/* Caramel Malt */}
      <div className="relative w-fit h-fit">
        <img 
          src={blackSplat}
          alt="Caramel Malt"
          className="w-[25vw] mt-[5vh] ml-[15vw]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h4 className="font-anton border-b-2 border-black uppercase mb-2">
            caramel-malt
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum accusamus placeat 
            distinctio iusto exercitationem labore nulla atque temporibus beatae?
          </p>
        </div>
      </div>

      {/* Mason Jar (puede quedarse igual) */}
      <img 
        src={masonJar}
        alt="Mason Jar"
        className="w-[12vw] h-[45vh] absolute bottom-[10vh] left-1/4 -translate-x-1/2 -rotate-[17deg]"
        style={{ filter: 'drop-shadow(15px 5px 8px rgba(0, 0, 0, 0.6))' }}
      /> 
    </div>
  );
};

export default FlavorProfile;