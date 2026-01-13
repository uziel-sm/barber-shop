import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'Minoxidil 5%',
      price: '$200',
      description: 'Tratamiento efectivo para potenciar el crecimiento de barba y cabello.',
      image: 'assets/img/minoxidil.png'
    },
    // {
    //   name: 'Cera Mate',
    //   price: '$150',
    //   description: 'Fijación fuerte con acabado natural sin brillo para un estilo duradero.',
    //   image: 'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=2070&auto=format&fit=crop'
    // },
    // {
    //   name: 'Aceite para Barba',
    //   price: '$200',
    //   description: 'Hidratación profunda, suavidad y brillo saludable para tu barba.',
    //   image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop'
    // },
  ];

  return (
    <section id="productos" className="py-[60px] text-center scroll-mt-[70px] barber-bg">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <h2 className="font-heading text-[2.5rem] mb-2.5 uppercase text-white">NUESTROS PRODUCTOS</h2>
        <p className="mb-10 text-[1.2rem] text-[#ccc]">Calidad profesional para tu cuidado personal</p>

        <div className="flex justify-center gap-[30px] flex-wrap">
          {products.map((product, index) => (
            <div key={index} className="bg-barber-card p-[20px] rounded-lg flex-1 min-w-[280px] max-w-[300px] shadow-lg hover:-translate-y-2.5 transition-transform duration-300 flex flex-col items-center group border border-transparent hover:border-barber-red/30">
               <div className="w-full h-[250px] overflow-hidden rounded-md mb-4 bg-gray-800 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
               </div>
               <h3 className="text-barber-red text-[1.5rem] mb-[5px] font-heading uppercase">{product.name}</h3>
               <p className="text-[1.8rem] font-bold text-white mb-[10px]">{product.price}</p>
               <p className="text-gray-400 text-sm mb-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;