import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle,  } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-barber-text border-t border-gray-800">
      {/* Contact Content Integrated into Footer */}
      <div id="contacto" className="py-[60px] text-center scroll-mt-[75px]">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <h2 className="font-heading text-[2.5rem] mb-2.5 uppercase">CONTACTO</h2>
          <p className="mb-10 text-[1.2rem] text-[#ccc]">Visítanos</p>
          
          <div className="flex justify-around items-start gap-[40px] flex-wrap text-left">
            {/* Contact Info */}
            <div className="flex-1 min-w-[300px]">
              <h3 className="text-barber-red mb-[15px] border-b-2 border-barber-red pb-[5px] font-heading text-[1.75rem] uppercase">HORARIOS</h3>
              <p className="mb-[15px]"><strong>Martes a Sábado</strong></p>
              <p className="mb-[15px]">11:00 AM - 2:30 PM</p>
              <p className="mb-[15px]">4:00 PM - 8:00 PM</p>

              <h3 className="text-barber-red mb-[15px] border-b-2 border-barber-red pb-[5px] font-heading text-[1.75rem] uppercase mt-8">INFORMACIÓN DEL CONTACTO</h3>
              <p className="mb-[15px] flex items-center gap-2">
                <MapPin className="text-barber-red" />J. Agustín Castro. Dgo</p>
              <p className="mb-[15px] flex items-center gap-2">
                  <Phone className="text-barber-red" size={20} /> <strong>Teléfono:</strong> 676 109 0422
              </p>
              <p className="mb-[15px] flex items-center gap-2">
                  <Mail className="text-barber-red" size={20} /> <strong>Email:</strong> barberhancelluna@gmail.com
              </p>
                                      
              <div className="mt-[20px] flex gap-[15px]">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/share/17pu9r8BsC/" target="_blank" rel="noopener noreferrer" className="text-barber-text text-[1.5rem] hover:text-barber-red transition-colors">
                      <Facebook size={24} />
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/hanceluna_?igsh=aDF4c240d290dzFq" target="_blank" rel="noopener noreferrer" className="text-barber-text text-[1.5rem] hover:text-barber-red transition-colors">
                      <Instagram size={24} />
                  </a>

                  {/* Whatsapp*/}
                  <a href="https://wa.me/5216761090422?text=Hola%20Hancel,%20quiero%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="text-barber-text text-[1.5rem] hover:text-barber-red transition-colors">
                      <MessageCircle size={24} />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black py-5 text-center text-[0.9rem] text-gray-500 border-t border-gray-900">
          <p>© Barber Shop Hancel Luna. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
