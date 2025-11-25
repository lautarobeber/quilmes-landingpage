const Footer = () => {
  return (
    <footer className="w-screen bg-[#001f3f] text-white py-6  px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <img 
          src="/src/assets/images/lagunitas-logo.png" 
          alt="Quilmes Logo" 
          className="h-[60px] mb-8"
        />

        {/* Social Media Icons */}
        <div className="flex gap-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0085CC] transition-colors">
            <i className="ri-facebook-fill text-3xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0085CC] transition-colors">
            <i className="ri-instagram-fill text-3xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0085CC] transition-colors">
            <i className="ri-twitter-fill text-3xl"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0085CC] transition-colors">
            <i className="ri-youtube-fill text-3xl"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0085CC] transition-colors">
            <i className="ri-tiktok-fill text-3xl"></i>
          </a>
        </div>

        {/* Links */}
        <div className="flex gap-8 mb-6 text-sm uppercase font-semibold">
          <a href="#" className="hover:text-[#0085CC] transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-[#0085CC] transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-[#0085CC] transition-colors">Información Oficial de la Compañía</a>
          <a href="#" className="hover:text-[#0085CC] transition-colors">Libro de Quejas</a>
        </div>

        {/* Legal Text */}
        <p className="text-xs text-center text-gray-400">
          BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS. NO COMPARTA EL CONTENIDO CON MENORES. Quilmes®
        </p>
      </div>
    </footer>
  );
};

export default Footer;
