"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ImageGallery from "@/components/ImageGallery";

export default function Galeria() {
  const { t } = useLanguage();
  
  // Definir todas las imágenes disponibles
  const heroImages = [
    {
      src: "/assets/images/hero/african_spaniard.png",
      alt: t('gallery.hero_image1_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/hero/american_spaniard.png",
      alt: t('gallery.hero_image2_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/hero/british_spaniard.png",
      alt: t('gallery.hero_image3_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/hero/chinesse_spaniard.png",
      alt: t('gallery.hero_image4_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/hero/french_spaniard.png",
      alt: t('gallery.hero_image5_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  const expatImages = [
    {
      src: "/assets/images/expats/expatriates.png",
      alt: t('gallery.expats_image1_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  const profesionalesImages = [
    {
      src: "/assets/images/profesionales/profesionales.png",
      alt: t('gallery.professionals_image1_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  const serviciosImages = [
    {
      src: "/assets/images/servicios/servicios.png",
      alt: t('gallery.services_image1_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  const testimoniosImages = [
    {
      src: "/assets/images/testimonios/testimonios.png",
      alt: t('gallery.testimonials_image1_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  const blogImages = [
    {
      src: "/assets/images/blog/experiencia.png",
      alt: t('gallery.blog_image1_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  const equipoImages = [
    {
      src: "/assets/images/equipo/profesionales.png",
      alt: t('gallery.team_image1_alt'),
      width: 600,
      height: 400,
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">{t('gallery.title')}</h1>
        <p className="text-lg mb-12">{t('gallery.description')}</p>
        
        {/* Sección de imágenes de héroe */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.hero_section')}</h2>
          <ImageGallery 
            images={heroImages} 
            title={t('gallery.hero_subtitle')} 
          />
        </div>
        
        {/* Sección de imágenes de expatriados */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.expats_section')}</h2>
          <ImageGallery 
            images={expatImages} 
            title={t('gallery.expats_subtitle')} 
          />
        </div>
        
        {/* Sección de imágenes de profesionales */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.professionals_section')}</h2>
          <ImageGallery 
            images={profesionalesImages} 
            title={t('gallery.professionals_subtitle')} 
          />
        </div>
        
        {/* Sección de imágenes de servicios */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.services_section')}</h2>
          <ImageGallery 
            images={serviciosImages} 
            title={t('gallery.services_subtitle')} 
          />
        </div>
        
        {/* Sección de imágenes de testimonios */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.testimonials_section')}</h2>
          <ImageGallery 
            images={testimoniosImages} 
            title={t('gallery.testimonials_subtitle')} 
          />
        </div>
        
        {/* Sección de imágenes de blog */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.blog_section')}</h2>
          <ImageGallery 
            images={blogImages} 
            title={t('gallery.blog_subtitle')} 
          />
        </div>
        
        {/* Sección de imágenes de equipo */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('gallery.team_section')}</h2>
          <ImageGallery 
            images={equipoImages} 
            title={t('gallery.team_subtitle')} 
          />
        </div>
      </section>
    </main>
  );
}
