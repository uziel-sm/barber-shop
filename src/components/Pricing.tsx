import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-[60px] text-center scroll-mt-[100px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <h2 className="font-heading text-[2.5rem] mb-2.5 uppercase">NUESTROS PRECIOS</h2>
        <p className="mb-10 text-[1.2rem] text-[#ccc]">Cortes de calidad a precios accesibles</p>
        
        <div className="flex justify-center gap-[30px] flex-wrap">
          {/* Price Card 1 */}
          <div className="bg-barber-card p-[30px] rounded-lg flex-1 min-w-[280px] max-w-[350px] shadow-lg hover:-translate-y-2.5 transition-transform duration-300">
            <h3 className="text-barber-red text-[1.8rem] mb-[15px] font-heading uppercase">CORTE DE CABELLO</h3>
            <p className="text-[2.5rem] font-bold text-barber-red my-[15px]">$120</p>
            <ul className="list-none p-0 text-center">
               <li className="mb-[10px] flex justify-center items-center gap-2"><Check size={16} className="text-barber-red"/> Todo tipo de cortes de cabello</li>
            </ul>
          </div>

          {/* Price Card 2 */}
          <div className="bg-barber-card p-[30px] rounded-lg flex-1 min-w-[280px] max-w-[350px] shadow-lg hover:-translate-y-2.5 transition-transform duration-300">
            <h3 className="text-barber-red text-[1.8rem] mb-[15px] font-heading uppercase">AFEITADO DE BARBA</h3>
            <p className="text-[2.5rem] font-bold text-barber-red my-[15px]">$80</p>
            <ul className="list-none p-0 text-center">
               <li className="mb-[10px] flex justify-center items-center gap-2"><Check size={16} className="text-barber-red"/> Diseño de barba</li>
            </ul>
          </div>

          {/* Price Card 3 */}
          <div className="bg-barber-card p-[30px] rounded-lg flex-1 min-w-[280px] max-w-[350px] shadow-lg hover:-translate-y-2.5 transition-transform duration-300">
            <h3 className="text-barber-red text-[1.8rem] mb-[15px] font-heading uppercase">PREMIUM</h3>
            <p className="text-[2.5rem] font-bold text-barber-red my-[15px]">$200</p>
            <ul className="list-none p-0 text-center">
               <li className="mb-[10px] flex justify-center items-center gap-2"><Check size={16} className="text-barber-red"/> Combo completo</li>
               <li className="mb-[10px] flex justify-center items-center gap-2"><Check size={16} className="text-barber-red"/> Corte + Barba</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;