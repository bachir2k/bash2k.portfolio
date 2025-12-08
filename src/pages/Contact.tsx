import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici vous pouvez ajouter la logique d'envoi du formulaire
        console.log('Formulaire soumis:', formData);
        alert('Message envoyé ! (Fonctionnalité à implémenter)');
    };

    return (
        <div id='contact' className="min-h-screen mt-20 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Contactez-<span className="text-[#f9004d]">Moi</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#f9004d] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Prêt à donner vie à votre prochain projet ? Discutons-en !
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]">

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Informations de Contact</h2>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#f9004d] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Email</h3>
                                        <p className="text-gray-300">contact@bachirsall.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#f9004d] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📱</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Téléphone</h3>
                                        <p className="text-gray-300">+221 XX XXX XX XX</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#f9004d] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Localisation</h3>
                                        <p className="text-gray-300">Sénégal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                       
                    </div>

                    {/* Formulaire de contact */}
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]">

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Envoyez-moi un Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
                                        placeholder="votre.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    Sujet *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
                                    placeholder="Objet de votre message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-[#f9004d] text-white font-bold rounded-2xl hover:bg-[#d1003d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Envoyer le Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;