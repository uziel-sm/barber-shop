import React from 'react';
import { motion, Variants } from 'framer-motion';

// 1. Define las variantes para el contenedor (el <h1>)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Retardo de 0.2 segundos entre la animación de los <span>
      staggerChildren: 0.2, 
    },
  },
};

// 2. Define las variantes para los elementos hijos (los <span>)
const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 // Empieza 20px abajo
  },
  visible: {
    opacity: 1,
    y: 0, // Termina en su posición natural
    transition: {
      duration: 0.5, // Duración de la animación individual
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pb-[200px] pt-5 scroll-mt-[100px] relative flex flex-col justify-center items-center text-center text-white p-0 bg-black"
    >
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 flex flex-col md:flex-row items-center pt-2 pb-4">
        
        {/*Hero Image (Contenedor de Imagen)*/}
        <div className="w-full md:w-1/2 h-1/3 flex items-center justify-center relative mt-0 md:mt-0 order-1 md:order-1">
          <div className="relative w-[60%] md:w-[60%] aspect-square">
            <img 
              src="src/assets/img/logo2.png" 
              alt="Barber Shop Hancel Luna" 
              className="object-cover w-full h-full rounded-full shadow-2xl z-10 relative border-2 border-white/60"
            />
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="w-full md:w-1/2 pt-8 md:pt-8 flex flex-col justify-center space-y-6 text-center md:text-left order-2 md:order-2">
          
          {/* Título */}
          <motion.h1 
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
            variants={containerVariants}
            initial="hidden" 
            // CAMBIO CLAVE: Usa whileInView para animar solo cuando está visible
            whileInView="visible" 
            // CAMBIO CLAVE: Permite que la animación se repita (no es 'once')
            viewport={{ once: false }} 
          >
            <motion.span className="block" variants={itemVariants}>
              Tu barberia de
            </motion.span> 
            <motion.span className="block" variants={itemVariants}>
              confianza
            </motion.span> 
          </motion.h1>

          {/* Párrafo */}
          <motion.p 
            className="text-xl text-white/90 max-w-lg mx-auto md:mx-0 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            // CAMBIO CLAVE: Usa whileInView para animar solo cuando está visible
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            // CAMBIO CLAVE: Permite la repetición
            viewport={{ once: false }} 
          >
            Horario de Martes a Sábado:  <br />
            11:00 AM - 2:30 PM.<br/>
            4:00 PM - 8:00 PM.<br />
          </motion.p>
        </div>
      </div>
      
      {/* Botón discreto en la parte inferior */}
      <div className="absolute bottom-10 z-20 left-1/2-translate-x-1/2 pb-[60px]">
        <motion.a 
          href="#productos" 
          className="inline-block border border-white/30 bg-barber-red backdrop-blur-sm text-white py-4 px-8 rounded-full text-sm font-heading tracking-widest hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          // CAMBIO CLAVE: Usa whileInView para animar solo cuando está visible
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          // CAMBIO CLAVE: Permite la repetición
          viewport={{ once: false }} 
        >
          PRODUCTOS
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;