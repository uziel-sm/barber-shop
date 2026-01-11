// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Rutas a tus templates para purga
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}' // Asegúrate de que esta línea esté correcta para tu proyecto
  ],
  theme: {
    extend: {
      animation: {
        // La clase CSS que usarás: animate-fade-in-up
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards', 
      },
      keyframes: {
        // Los keyframes deben tener el mismo nombre: fade-in-up
        'fade-in-up': { 
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      // *** IMPORTANTE: La sección transitionDelay fue eliminada/comentada ***
    }
  },
  plugins: []
};