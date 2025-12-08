import photo from "../assets/bachir.jpg";
function Home() {
  return (
    <div id="home" className="flex items-center justify-center min-h-screen px-4 py-20">
      <div className="text-white w-full max-w-6xl  rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-12 lg:p-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:mr-8 lg:mr-12">
            <h2 className="text-2xl md:text-2xl lg:text-[27px] font-semibold mb-1">
              Hello, it's Me
            </h2>
            <h1 className="text-3xl text-shadow-[0_2px_0_#f9004d] md:text-3xl lg:text-5xl font-bold mb-2">
               Bachir Sall
            </h1>
            <p className="text-lg md:text-xl lg:text-3xl font-semibold">
              And I'm a{" "}
              <span className="text-[#f9004d]">Full Stack Developer</span>
            </p>
            <div className="mt-5 ">
              <p>passionné par la création d'expériences web innovantes et performantes.</p>
            </div>
            <div className="flex items-center justify-between w-20 mt-5">
              <a href="https://github.com/bachir2k"
                className="text-4xl  hover:text-[#f9004d] transition:all delay-100 duration-300 cursor-pointer"
              >
                <i className="fa-brands fa-github "></i>
              </a>

              <a href="https://www.instagram.com/_bachir_221/"
                className="text-4xl hover:text-[#f9004d] transition:all delay-100 duration-300 cursor-pointer"
              >
                <i className="fa-brands fa-instagram "></i>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-shrink-0">
            <img
              className="w-65 h-62 md:w-64 md:h-64 lg:w-78 lg:h-78 rounded-full object-cover object-center shadow-lg"
              src={photo}
              alt="Bachir Sall"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
