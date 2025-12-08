import React, { useState, useEffect } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  // Fermer le menu mobile lors du resize vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center px-4">
      <header className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl h-16 md:h-19 px-4 md:px-6 flex items-center justify-between rounded-xl bg-white shadow-xl backdrop-blur-md z-50">

        {/* LOGO */}
        <div className="font-bold text-2xl md:text-3xl lg:text-4xl flex-shrink-0">
          M<span style={{ color: "#f9004d" }}>&#8709;</span>Bash
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-base lg:text-lg">
          {["Home", "About", "skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="px-2 lg:px-4 py-1 lg:py-2 text-white text-sm font-medium bg-[#0d0d7b] rounded-sm hover:bg-blue-600 hover:text-[#f9004d] transition-all duration-300 whitespace-nowrap"
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
          <span className={`w-6 h-0.5 bg-blue-500 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-blue-500 rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-blue-500 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* MOBILE MENU */}
        <div className={`absolute top-full left-0 right-0 mt-2 bg-[rgb(255,255,255,0.9)] backdrop-blur-xl md:hidden shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        }`}>
          <nav className="flex flex-col items-center gap-3 py-6 px-4">
             {["Home", "About", "skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="px-3 lg:px-5 py-2 lg:py-3 text-white font-medium bg-blue-500 rounded-3xl hover:bg-blue-600 hover:text-[#f9004d] transition-all duration-300 whitespace-nowrap"
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
