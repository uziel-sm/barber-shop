import React from 'react';
import { Scissors, SprayCan, Crown, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-[60px] text-center scroll-mt-[70px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <h2 className="font-heading text-[2.5rem] mb-2.5 uppercase">SERVICIOS</h2>
        <p className="mb-10 text-[1.2rem] text-[#ccc]">Calidad, estilo y los mejores precios</p>
        
        <div className="flex justify-center gap-[30px] flex-wrap">
          {/* Card 1: Corte */}
          <div className="bg-barber-card p-[30px] rounded-lg flex-1 min-w-[280px] max-w-[350px] shadow-lg hover:-translate-y-2.5 transition-transform duration-300 flex flex-col items-center relative overflow-hidden group">
            <div className="text-[3rem] text-barber-red mb-[15px] flex justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Scissors size={48} />
            </div>
            <h3 className="text-barber-red text-[1.8rem] mb-[5px] font-heading uppercase">CORTE</h3>
            <p className="text-[2.5rem] font-bold text-white mb-[20px]">$120</p>
            <div className="w-full border-t border-gray-600 my-[15px]"></div>
            <ul className="list-none p-0 text-left space-y-3 w-full pl-4">
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Desvanecidos y cortes modernos</span></li>
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Cortes clásicos con tijera</span></li>
            </ul>
          </div>

          {/* Card 2: Afeitado */}
          <div className="bg-barber-card p-[30px] rounded-lg flex-1 min-w-[280px] max-w-[350px] shadow-lg hover:-translate-y-2.5 transition-transform duration-300 flex flex-col items-center relative overflow-hidden group">
            <div className="text-[3rem] text-barber-red mb-[15px] flex justify-center transform group-hover:scale-110 transition-transform duration-300">
              <SprayCan size={48} />
            </div>
            <h3 className="text-barber-red text-[1.8rem] mb-[5px] font-heading uppercase">AFEITADO</h3>
            <p className="text-[2.5rem] font-bold text-white mb-[20px]">$80</p>
            <div className="w-full border-t border-gray-600 my-[15px]"></div>
            <ul className="list-none p-0 text-left space-y-3 w-full pl-4">
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Diseño y perfilado de barba</span></li>
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Afeitado tradicional con navaja</span></li>
              {/* <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Toalla caliente y aceites esenciales</span></li> */}
            </ul>
          </div>

          {/* Card 3: Premium */}
          <div className="bg-barber-card p-[30px] rounded-lg flex-1 min-w-[280px] max-w-[350px] shadow-lg border border-barber-red/20 hover:border-barber-red/50 hover:-translate-y-2.5 transition-all duration-300 flex flex-col items-center relative overflow-hidden group">
             {/* Optional Badge */}
             <div className="absolute top-0 right-0 bg-barber-red text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                MEJOR VALOR
             </div>
            <div className="text-[3rem] text-barber-red mb-[15px] flex justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Crown size={48} />
            </div>
            <h3 className="text-barber-red text-[1.8rem] mb-[5px] font-heading uppercase">PREMIUM</h3>
            <p className="text-[2.5rem] font-bold text-white mb-[20px]">$200</p>
            <div className="w-full border-t border-gray-600 my-[15px]"></div>
            <ul className="list-none p-0 text-left space-y-3 w-full pl-4">
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Servicio completo: Corte + Barba</span></li>
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Limpieza facial express</span></li>
              <li className="flex items-start gap-2"><Check className="text-barber-red shrink-0" size={18} /> <span>Peinado y productos de calidad</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
