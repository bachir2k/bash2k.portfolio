import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailjs';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        // Validation côté client
        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Veuillez remplir tous les champs obligatoires.'
            });
            setIsSubmitting(false);
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                type: 'error',
                message: 'Veuillez entrer une adresse email valide.'
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Vérifier si EmailJS est configuré
            if (!isEmailJSConfigured()) {
                throw new Error('Service d\'envoi de mail non configuré. Veuillez configurer EmailJS.');
            }

            // Préparer les données pour EmailJS
            const templateParams = {
                from_name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: EMAILJS_CONFIG.TO_EMAIL,
                to_name: EMAILJS_CONFIG.TO_NAME,
                reply_to: formData.email,
            };

            // Envoyer l'email via EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email envoyé avec succès:', result);

            // Réinitialiser le formulaire
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Afficher le message de succès
            setSubmitStatus({
                type: 'success',
                message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
            });

        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);

            // Afficher le message d'erreur
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error
                    ? error.message
                    : 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='contact' className="min-h-screen py-20 px-4">
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

                    {/* Avertissement configuration EmailJS */}
                    {!isEmailJSConfigured() && (
                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
                            <div className="flex items-center text-yellow-400">
                                <span className="mr-2">⚠️</span>
                                <span className="text-sm">
                                    Le service d'envoi de mail n'est pas configuré. Consultez EMAILJS_SETUP.md pour l'activer.
                                </span>
                            </div>
                        </div>
                    )}
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
                                        <p className="text-gray-300">sallbachir047@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#f9004d] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📱</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Téléphone</h3>
                                        <p className="text-gray-300">+221 76 549 00 22</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#f9004d] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Localisation</h3>
                                        <p className="text-gray-300">Sénégal, Dakar</p>
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

                            {/* Messages de feedback */}
                            {submitStatus.type && (
                                <div className={`p-4 rounded-2xl border ${
                                    submitStatus.type === 'success'
                                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                        : 'bg-red-500/10 border-red-500/20 text-red-400'
                                }`}>
                                    <div className="flex items-center">
                                        <span className="mr-2">
                                            {submitStatus.type === 'success' ? '✅' : '❌'}
                                        </span>
                                        <span className="text-sm">{submitStatus.message}</span>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-8 py-4 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                                    isSubmitting
                                        ? 'bg-gray-500 cursor-not-allowed'
                                        : 'bg-[#f9004d] hover:bg-[#d1003d] text-white'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Envoi en cours...
                                    </div>
                                ) : (
                                    'Envoyer le Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;