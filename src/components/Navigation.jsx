import logo from '../assets/images/lagunitas-logo.png';

const Navigation = () => {
  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-screen h-[12vh] px-[4vw] flex justify-between items-center z-50">
        <img
          src={logo}
          alt="Lagunitas Logo"
          className="h-[90px]"
        />
        <a
          href="https://www.tada.com.ar/home?af_xp=custom&af_force_deeplink=true&source_caller=ui&id=3&screen=Browse&pid=WEB_MARCAS&is_retargeting=true&af_click_lookback=1d&shortlink=WEBQUILMESAO&type=BRAND&deep_link_value=WEB_MARCAS&af_reengagement_window=7d&c=ARG-BRA-QUILMES-CRO-ALL-WEB_MARCAS-AWARENESS_REACH-28D-NACIONAL-WEBQUILMESAO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 font-anton text-xl uppercase font-extrabold"
        >
          Comprar
        </a>
        <i className="ri-menu-line text-[2.5vw] hidden"></i>
      </nav>
    </>
  );
};

export default Navigation;
