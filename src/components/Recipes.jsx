import bannerImage from '../assets/images/DTH_ProgramBanner.jpg';

const Recipes = () => {
  return (
    <div 
      id="page6" 
      className="w-screen h-[90vh] pl-[9vw] flex gap-8"
      data-scroll-section
    >
      <div>
        <img 
          src={bannerImage}
          alt="Program Banner"
          className="w-[50vw] h-[62vh]"
        />
      </div>

      <div className="px-[4vw] w-[40vw] h-[62vh]">
        <h5 className="text-[2vmax]">Recipes</h5>
        <h1 className="mt-[3vh] w-[30vw] font-anton text-[4vw] font-thin leading-[9.5vh] tracking-[0.5vw] uppercase">
          Beer Speaks. Bellies Grumble.
        </h1>
        <p className="mt-[3vh] font-normal font-dosis text-[#111]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores saepe, ex magnam temporibus 
          repellendus nobis doloremque voluptates quis ad fugit rem similique, porro, neque voluptate numquam 
          quae? Repudiandae, ratione!
        </p>
        <button 
          id="page6_part2_button"
          className="mt-[3vh] text-[1.2vmax] px-[1.5vmax] py-[0.8vmax] font-anton uppercase font-thin text-white bg-black border-none cursor-pointer"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Recipes;
