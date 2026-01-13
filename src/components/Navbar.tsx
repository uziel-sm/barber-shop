import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'PRODUCTOS', href: '#productos' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'GALERIA', href: '#galeria' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky header
      
      let current = '';
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
           current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-[#000] px-6 md:px-10 py-2.5 sticky top-0 z-50 flex justify-between items-center shadow-md border-b border-white/20">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="h-[50px] w-[50px] bg-barber-bg rounded-full flex items-center justify-center overflow-hidden">
             {/* Placeholder for img/loguito.jpg */}
             <img src="assets/img/logo2.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-center m-0">
          <a href="#" className="font-heading text-[1.5rem] md:text-[2rem] text-white italic hover:text-barber-red transition-colors no-underline">
            HANCEL LUNA
          </a>
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`font-heading font-bold no-underline transition-colors ${isActive ? 'text-barber-red' : 'text-barber-text hover:text-barber-red'}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white hover:text-barber-red focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="absolute top-full right-0 w-max bg-[#111]/95 backdrop-blur-md border-b border-l border-barber-red rounded-bl-2xl md:hidden flex flex-col items-start py-6 px-8 gap-4 pb-10 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`font-heading font-bold text-lg no-underline transition-colors ${isActive ? 'text-barber-red' : 'text-barber-text hover:text-barber-red'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;