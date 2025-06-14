'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/assets/images/hero/african_spaniard.png',
    alt: 'Colaboración africana española',
  },
  {
    src: '/assets/images/hero/american_spaniard.png',
    alt: 'Colaboración americana española',
  },
  {
    src: '/assets/images/hero/british_spaniard.png',
    alt: 'Colaboración británica española',
  },
  {
    src: '/assets/images/hero/chinesse_spaniard.png',
    alt: 'Colaboración china española',
  },
  {
    src: '/assets/images/hero/french_spaniard.png',
    alt: 'Colaboración francesa española',
  },
];

export default function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // cambiar imagen cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  // Cambiar manualmente
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-12 overflow-hidden rounded-xl shadow-xl">
      <div className="relative w-full h-[400px] md:h-[500px]">
        {images.map((image, index) => (
          <div 
            key={image.src}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
              priority={index === 0} // Cargar la primera imagen con prioridad
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </div>
      
      {/* Controles del carrusel */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white backdrop-blur-sm z-10"
        aria-label="Imagen anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white backdrop-blur-sm z-10"
        aria-label="Imagen siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentImageIndex === index ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
