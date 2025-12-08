import me from "../assets/Bachir_katakana.png";
function About() {
    return (
        <div id="about" className="min-h-screen  py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section À Propos */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        À Propos de <span className="text-[#f9004d]">Moi</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#f9004d] mx-auto mb-8"></div>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Description personnelle */}
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]">

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Qui suis-je ?</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                Je suis Mouahamadoul Bachir Sall, un développeur Full Stack et Etudiant en Master 1 Génie Logiciels. Passionné par la création d'expériences web innovantes et performantes.
                            </p>
                            <p>
                                Avec une solide expertise en développement front-end et back-end, je transforme les idées en solutions digitales robustes et évolutives.
                            </p>
                            <p>
                                Mon approche combine créativité technique et rigueur pour livrer des produits de qualité qui répondent aux besoins des utilisateurs.
                            </p>
                        </div>
                    </div>

                    {/* Informations clés */}
                    <div className="space-y-6 flex items-center justify-center">
                        <img
                            className="w-full h-auto rounded-3xl shadow-[0_0_1em_white] object-cover"
                            src={me} alt="Bachir Sall" />
                    </div>
                </div>

                {/* Compétences */}
                <div className="" id="skills"></div>
                <div  className=" backdrop-blur-md mt-50 rounded-3xl p-8 shadow-xl mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Mes Compétences</h2>
                    <div className="w-24 h-1 bg-[#f9004d] mx-auto mb-8"></div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { name: "React", icon: (<i className="fa-brands fa-react"></i>) },
                            { name: "Node.js", icon: (<i className="fa-brands fa-node-js"></i>) },
                            { name: "TypeScript / JavaScript", icon: (<i className="fa-brands fa-js"></i>) },
                            { name: "Laravel", icon: (<i className="fa-brands fa-laravel"></i>) },
                            { name: "PHP", icon: (<i className="fa-brands fa-php"></i>) },
                            { name: "MySQL", icon: (<i className="fa-solid fa-database"></i>) },
                            { name: "Java", icon: (<i className="fa-brands fa-java"></i>) },
                            { name: "Tailwind css", icon: (<i className="fa-brands fa-css3-alt"></i>) },

                            { name: "Android", icon: (<i className="fa-brands fa-android"></i>) },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 bg-black/20 border border-white/20 h-36 rounded-2xl hover:scale-106 hover:border-white/70 hover:bg-black/50
                   transition-all duration-350 delay-100 shadow-lg cursor-pointer"
                            >
                                <div className="text-6xl mb-3 text-[#f9004d]">{skill.icon}</div>
                                <div className="text-white font-semibold text-center tracking-wide">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Intéressé par une collaboration ?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger sur les dernières technologies.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default About;