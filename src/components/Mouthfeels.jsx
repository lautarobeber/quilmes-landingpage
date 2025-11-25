const Mouthfeels = () => {
  return (
    <div
      id="page3"
      className="w-screen min-h-screen bg-[#f5f1e8] py-12"
    >
      {/* Header */}
      <div className="text-center px-[8vw] mb-8">
        <h1 className="text-[8vw] font-black leading-none uppercase text-[#0085CC]"
          style={{
            fontFamily: '"Bungee Shade", cursive',
            letterSpacing: '0.08em'
          }}>
          REFRESCANTE
        </h1>
      </div>

      <div className="flex justify-between items-start gap-12 px-[8vw]">
        {/* Left Part - Video */}
        <div className="w-[45vw]">
          <iframe
            className="w-full aspect-video rounded-sm shadow-lg"
            src="https://www.youtube.com/embed/ycleKszxMXs?enablejsapi=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        {/* Right Part - Text Content */}
        <div className="w-[35vw] pt-4 ml-auto space-y-6">
          <p className="text-xl leading-relaxed text-[#333] font-anton">
            <span className="text-[#0085CC]">Quilmes</span> es parte de nuestra historia. Esa frescura que compartimos entre amigos, ese brindis que celebra los momentos simples y la primera pinta bien fría después de un día largo.
          </p>
         
          <p className="text-base font-dosis leading-relaxed text-[#444]" style={{ fontWeight: 500 }}>
            Quilmes es Argentina — es fútbol, asado, verano, río, alegría, reunión y nostalgia.
            <span className="italic"> Quilmes es la excusa perfecta para unir:
entre amigos, entre desconocidos, entre generaciones.</span>
          </p>

          <a
            href="https://www.youtube.com/watch?v=ycleKszxMXs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0085CC] text-white px-8 py-3 font-anton text-sm uppercase tracking-wide hover:bg-[#006699] transition-colors shadow-md"
          >
            Conocé más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mouthfeels;
