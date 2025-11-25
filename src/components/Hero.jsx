import Logo from '../assets/images/dogimage.png';

const Hero = () => {
  return (
    <div 
      id="page1" 
      className="w-screen h-screen flex justify-center items-center relative bg-gray-100"
    >
      <h1 className="w-[60vw] font-anton text-[13vw] font-black text-center uppercase leading-[12vw] text-[#0D497F]">
        sabor del encuentro
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
