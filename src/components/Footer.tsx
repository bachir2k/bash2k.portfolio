

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <div className="font-bold text-white text-2xl md:text-3xl mb-4">
              M<span style={{ color: "#f9004d" }}>&#8709;</span>Bash
            </div>
            <p className="text-gray-400 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences web
              innovantes et performantes.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="text-right md:text-center">
            <h3 className="text-white font-semibold text-lg mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#f9004d] transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#f9004d] transition-colors"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-[#f9004d] transition-colors"
                >
                  Expérience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#f9004d] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

         
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mouhamadoul Bachir Sall. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
