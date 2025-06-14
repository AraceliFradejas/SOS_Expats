"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";

export default function Testimonios() {
  const { t } = useLanguage();
  
  // Definir imágenes para la galería de testimonios
  const testimoniosImages = [
    {
      src: "/assets/images/testimonios/testimonios.png",
      alt: t('testimonials.gallery_image1_alt'),
      width: 600,
      height: 400,
    },
    // Reutilizamos la misma imagen para crear más ejemplos en la galería
    {
      src: "/assets/images/testimonios/testimonios.png",
      alt: t('testimonials.gallery_image2_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/testimonios/testimonios.png",
      alt: t('testimonials.gallery_image3_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/testimonios/testimonios.png",
      alt: t('testimonials.gallery_image4_alt'),
      width: 600,
      height: 400,
    }
  ];

  // Datos de testimonios
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United Kingdom",
      text: t('testimonials.testimonial1_text'),
      image: "/assets/images/testimonios/testimonios.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Jean-Pierre Dupont",
      country: "France",
      text: t('testimonials.testimonial2_text'),
      image: "/assets/images/testimonios/testimonios.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Chen Wei",
      country: "China",
      text: t('testimonials.testimonial3_text'),
      image: "/assets/images/testimonios/testimonios.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Isabella Romano",
      country: "Italy",
      text: t('testimonials.testimonial4_text'),
      image: "/assets/images/testimonios/testimonios.png",
      rating: 5,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">{t('testimonials.title')}</h1>
        <p className="text-lg mb-12">{t('testimonials.description')}</p>
        
        {/* Tarjetas de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} ${t('testimonials.from')} ${testimonial.country}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.country}</p>
                  <div className="flex text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-current" : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Galería de imágenes de eventos con expatriados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t('testimonials.gallery_title')}</h2>
        <p className="text-lg mb-8">{t('testimonials.gallery_description')}</p>
        <ImageGallery 
          images={testimoniosImages} 
          title={t('testimonials.gallery_subtitle')} 
        />
      </section>
      
      {/* Sección de estadísticas */}
      <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t('testimonials.stats_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold">500+</p>
            <p className="text-lg">{t('testimonials.stats_expats')}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">95%</p>
            <p className="text-lg">{t('testimonials.stats_satisfaction')}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">30+</p>
            <p className="text-lg">{t('testimonials.stats_countries')}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">200+</p>
            <p className="text-lg">{t('testimonials.stats_professionals')}</p>
          </div>
        </div>
      </section>
      
      {/* CTA para compartir su experiencia */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">{t('testimonials.share_title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{t('testimonials.share_description')}</p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
          {t('testimonials.share_button')}
        </button>
      </section>
    </main>
  );
}
