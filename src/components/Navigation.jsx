const Navigation = () => {
  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-[5vw] w-[94.2vw] h-[12vh] px-[4vw] flex justify-between items-center z-50">
        <img 
          src="/src/assets/images/lagunitas-logo.png" 
          alt="Lagunitas Logo" 
          className="h-[70px]"
        />
        <button className="bg-white text-black px-6 py-3 font-anton text-xl uppercase font-extrabold">
          Buy Beer
        </button>
        <i className="ri-menu-line text-[2.5vw] hidden"></i>
      </nav>

      {/* Left Navigation */}
      <nav className="fixed left-0 top-0 w-[5vw] h-screen flex flex-col items-center py-6 gap-8 border-r-2 border-gray-700 z-50">
        <i className="ri-menu-line text-2xl"></i>
        <i className="ri-search-line text-2xl"></i>
      </nav>
    </>
  );
};

export default Navigation;
