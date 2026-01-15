import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[300px] w-full rounded-[5px] group relative select-none">
      <div className="overflow-hidden bg-[#444] h-[250px] relative rounded-t-[5px]">
        <img 
            src={images[currentIndex]} 
            alt={`${title} ejemplo ${currentIndex + 1}`} 
            className="w-full h-full object-cover transition-all duration-300"
        />
        
        {/* Left Arrow */} 
        <div 
          onClick={prevSlide}
          className="absolute top-[50%] -translate-y-1/2 left-2 text-2xl rounded-full p-1 bg-black/50 text-white cursor-pointer hover:bg-barber-red transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </div>

        {/* Right Arrow */}
        <div 
          onClick={nextSlide}
          className="absolute top-[50%] -translate-y-1/2 right-2 text-2xl rounded-full p-1 bg-black/50 text-white cursor-pointer hover:bg-barber-red transition-colors z-10"
        >
          <ChevronRight size={24} />
        </div>

         {/* Dots Indicators */}
         <div className='absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10'>
            {images.map((_, slideIndex) => (
                 <div
                    key={slideIndex}
                    onClick={() => setCurrentIndex(slideIndex)}
                    className={`transition-all w-2 h-2 rounded-full cursor-pointer shadow-sm ${currentIndex === slideIndex ? "bg-barber-red scale-125" : "bg-white/70 hover:bg-white"}`}
                 ></div>
            ))}
         </div>
      </div>
      <p className="font-bold font-heading text-[1.2rem] bg-barber-red p-2 uppercase text-white rounded-b-[5px]">
        {title}
      </p>
    </div>
  );
};

const Gallery: React.FC = () => {
  // Data for carousels with multiple images per category
  const categories = [
    { 
      title: 'CORTE',
      images: [ 
        'assets/img/corte1.2.jpeg',
        'assets/img/corte1.4.jpeg',
        'assets/img/corte1.5.jpeg',
        'assets/img/corte1.3.jpeg',
        'assets/img/corte1.6.jpeg'

      ]
    },
    { 
      title: 'AFEITADO',
      images: [
        'assets/img/barba3.png',
        'assets/img/corte1.1.jpeg',
        'assets/img/barba2.png'
        
      ]
    },
    { 
      title: 'CORTE + BARBA',
      images: [
        'assets/img/c+b1.jpeg',
        'assets/img/c+b2.jpeg',
        'assets/img/corte1.png',
        'assets/img/c+b3.jpeg'
      ]
    },
  ];

  return (
    <section id="galeria" className="py-[60px] text-center scroll-mt-[70px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <h2 className="font-heading text-[2.5rem] mb-2.5 uppercase">GALERIA</h2>
        <p className="mb-10 text-[1.2rem] text-[#ccc]">Algunos de nuestros trabajos</p>
        
        <div className="flex justify-center gap-[20px] flex-wrap">
          {categories.map((item, index) => (
             <Carousel key={index} images={item.images} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;