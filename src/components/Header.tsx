import {  useState, useEffect } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center px-4">
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl h-16 md:h-20 px-4 md:px-6 flex items-center justify-between rounded-3xl backdrop-blur-lg transition-all duration-300 z-50 ${
        isScrolled
          ? 'bg-white/10 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          : 'bg-white/10 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.35)]'
      }`}>

        {/* LOGO */}
        <div className="font-bold text-white text-2xl md:text-3xl lg:text-4xl ">
          M<span className="text-[#f9004d] flex-shrink-0 hover:scale-105 transition-transform duration-300">&#8709;</span>Bash
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-base lg:text-lg">
          {["Home", "About", "skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="px-3  lg:px-5 py-2 lg:py-2 text-white font-medium bg-[#f9004d] rounded-xl hover:bg-[#d1003d] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* BURGER MENU MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Menu mobile"
          aria-expanded={open}
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* MOBILE MENU */}
        <div className={`absolute top-full left-0 right-0 mt-2 backdrop-blur-lg bg-white/5 border border-white/10 md:hidden shadow-[0_0_40px_rgba(0,0,0,0.35)] rounded-3xl overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        }`}>
          <nav className="flex flex-col items-center gap-3 py-6 px-4">
             {["Home", "About", "skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              onClick={handleLinkClick}
              className="px-6 py-3 text-white w-full max-w-xs text-center font-medium bg-[#f9004d] rounded-3xl hover:bg-[#d1003d] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {item}
            </a>
          ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
