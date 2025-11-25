import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProductInfo = () => {
  const panelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ repeat: -1, repeatDelay: 3 })
        .fromTo(
          '.info-glow',
          { xPercent: -120, opacity: 0 },
          { xPercent: 140, opacity: 0.5, duration: 2.5, ease: 'power2.out' }
        )
        .to('.info-glow', { opacity: 0, duration: 0.4, ease: 'power1.out' });
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="page2" 
      className="w-screen h-screen flex justify-between items-center px-[10vw] pr-[4.1vw] bg-white"
    >
      {/* Left Part */}
      <div className="w-[25vw] h-[79vh]">
        <h3 className="font-dancing text-xl mb-3 text-[#0085CC]" >edición unlimitada</h3>
        <h1 className="w-[25vw] h-[30vh] text-[7vw] leading-[14vh] font-medium font-anton uppercase mb-36 text-gray-900">
          Quilmes Sin Alcohol
        </h1>
        <p className="text-[#111] text-[13px] font-medium leading-[22px] mb-4 font-anton">
          Fresca y de cuerpo liviano. Una cerveza sin alcohol con el sabor exacto de una cerveza lager
        </p>
        <a 
          id="page2_part1_button"
          className="btn-lagunitas-black inline-block"
          href="https://www.tada.com.ar/home?af_xp=custom&af_force_deeplink=true&source_caller=ui&id=3&screen=Browse&pid=WEB_MARCAS&is_retargeting=true&af_click_lookback=1d&shortlink=WEBQUILMESAO&type=BRAND&deep_link_value=WEB_MARCAS&af_reengagement_window=7d&c=ARG-BRA-QUILMES-CRO-ALL-WEB_MARCAS-AWARENESS_REACH-28D-NACIONAL-WEBQUILMESAO"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar ahora!
        </a>
      </div>

      {/* Right Part */}
      <div
        ref={panelRef}
        className="relative w-[26.5vw] h-[65vh] p-[2.5vmax] bg-white/50 backdrop-blur-xl border border-white/40 shadow-[0_20px_45px_rgba(0,40,90,0.18)] rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="info-glow absolute top-0 -left-1/3 w-1/2 h-full bg-gradient-to-r from-white/40 via-white/10 to-transparent rounded-3xl" />
        </div>

        <div className="relative mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_15px_35px_rgba(0,65,130,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,65,130,0.18)] transition-all duration-300">
          <h3 className="text-[14px] font-bold mb-1 text-[#0085CC] uppercase tracking-wide">GRADUACIÓN ALCOHÓLICA</h3>
          <h5 className="text-[11px] font-medium text-gray-500 mb-2 italic">Volumen alcoholico</h5>
          <div className="flex justify-between items-center border-t-4 border-[#0085CC] pt-2">
            <h2 className="text-[45px] font-anton text-[#0085CC] drop-shadow-md">
              0,0 <span className="text-[30px]">%</span>
            </h2>
            <p className="text-[12px] w-[12vw] text-gray-700 leading-[16px] font-anton">
              Una cerveza sin alcohol con el sabor exacto de una cerveza lager
            </p>
          </div>
        </div>

        <div className="relative mb-4 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_15px_35px_rgba(0,65,130,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,65,130,0.18)] transition-all duration-300">
          <h3 className="text-[14px] font-bold mb-1 text-[#0085CC] uppercase tracking-wide">AMARGOR</h3>
          <h5 className="text-[11px] font-medium text-gray-500 mb-2 italic">IBU</h5>
          <div className="flex justify-between items-center border-t-4 border-[#0085CC] pt-2">
            <h2 className="text-[45px] font-anton text-[#0085CC] drop-shadow-md">
              16<span className="text-[30px]">.5</span>
            </h2>
            <p className="text-[12px] w-[12vw] text-gray-700 leading-[16px] font-anton">
              Nivel de amargor equilibrado para un sabor suave y refrescante
            </p>
          </div>
        </div>

        <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_15px_35px_rgba(0,65,130,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,65,130,0.18)] transition-all duration-300">
          <h3 className="text-[14px] font-bold mb-1 text-[#0085CC] uppercase tracking-wide">TEMPERATURA IDEAL</h3>
          <h5 className="text-[11px] font-medium text-gray-500 mb-2 italic">Temperatura de servido</h5>
          <div className="flex justify-between items-center border-t-4 border-[#0085CC] pt-2">
            <h2 className="text-[45px] font-anton text-[#0085CC] drop-shadow-md">
              4 <span className="text-[30px]">°</span>
            </h2>
            <p className="text-[12px] w-[12vw] text-gray-700 leading-[16px] font-anton">
              Temperatura perfecta para disfrutar el mejor sabor y frescura
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
