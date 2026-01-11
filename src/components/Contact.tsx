// import React from 'react';
// import { Phone, Mail, Clock, MapPin} from 'lucide-react'; 

// const Contact: React.FC = () => {
//   return (
//     <section id="contacto" className="py-20 bg-black text-white">
//       <div className="max-w-5xl mx-auto px-4">
        
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-red-500 tracking-wider">
//           Contáctanos
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
//           {/* Columna 1: Información de Contacto y Ubicación */}
//           <div className="space-y-6 text-left">
//             <h3 className="text-2xl font-semibold mb-4 border-b border-red-500/50 pb-2">Información de Contacto</h3>
            
//             {/* TELÉFONO */}
//             <div className="flex items-start space-x-4">
//               <Phone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//               <div>
//                 <p className="font-bold text-lg">Teléfono</p>
//                 <a href="tel:+526761090422" className="text-white/80 hover:text-red-400 transition-colors">
//                   +52 (676) 109-0422
//                 </a>
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div className="flex items-start space-x-4">
//               <Mail className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//               <div>
//                 <p className="font-bold text-lg">Correo Electrónico</p>
//                 <a href="mailto:info@barbershop.com" className="text-white/80 hover:text-red-400 transition-colors">
//                   info@barbershop.com
//                 </a>
//               </div>
//             </div>

//             {/* HORARIO */}
//             <div className="flex items-start space-x-4">
//               <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//               <div>
//                 <p className="font-bold text-lg">Horario</p>
//                 <p className="text-white/80">Lun - Sáb: 9:00 AM - 8:00 PM</p>
//                 <p className="text-white/80">Domingo: Cerrado</p>
//               </div>
//             </div>

//             {/* UBICACIÓN (INTEGRADA AQUÍ) */}
//             <div className="flex items-start space-x-4 pt-4">
//               <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//               <div>
//                 <p className="font-bold text-lg">Ubicación</p>
//                 <p className="text-white/80">Av. Las Américas #456</p>
//                 <p className="text-white/80">Santo Domingo, República Dominicana</p>
//                 {/* Puedes añadir un enlace directo a Google Maps aquí */}
//                 <a 
//                     href="https://maps.app.goo.gl/EjemploDeUbicacion" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="text-red-500 hover:text-red-400 text-sm mt-1 inline-block"
//                 >
//                     Ver en Google Maps
//                 </a>
//               </div>
//             </div>
//           </div>
          
//           {/* Columna 2: Formulario de Contacto (Ejemplo) */}
//           <div className="p-6 bg-[#1a1a1a] rounded-lg shadow-xl">
//             <h3 className="text-2xl font-semibold mb-6 text-center">Envíanos un Mensaje</h3>
//             {/* Aquí iría un formulario de contacto */}
//             <form className="space-y-4">
//               <input type="text" placeholder="Tu Nombre" className="w-full p-3 bg-black/50 border border-red-500/30 rounded-md text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500" />
//               <input type="email" placeholder="Tu Correo" className="w-full p-3 bg-black/50 border border-red-500/30 rounded-md text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500" />
//               <textarea placeholder="Tu Mensaje" rows={4} className="w-full p-3 bg-black/50 border border-red-500/30 rounded-md text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"></textarea>
//               <button 
//                 type="submit" 
//                 className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors"
//               >
//                 Enviar Mensaje
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;