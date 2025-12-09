// Configuration EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'sallbachir047@gmail.com', // destinataire par défaut
  TO_NAME: import.meta.env.VITE_EMAILJS_TO_NAME || 'Bachir Sall',
};

// Vérifier si les clés sont configurées
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'your_service_id' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'your_template_id' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key' &&
    Boolean(EMAILJS_CONFIG.TO_EMAIL)
  );
};
