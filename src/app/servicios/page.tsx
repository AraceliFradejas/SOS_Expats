"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ImageGallery from "@/components/ImageGallery";

export default function Servicios() {
  const { t } = useLanguage();
  
  // Definir imágenes para la galería de servicios
  const serviciosImages = [
    {
      src: "/assets/images/servicios/servicios.png",
      alt: t('services.gallery_image1_alt'),
      width: 600,
      height: 400,
    },
    // Reutilizamos la misma imagen para crear más ejemplos en la galería
    {
      src: "/assets/images/servicios/servicios.png",
      alt: t('services.gallery_image2_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/servicios/servicios.png",
      alt: t('services.gallery_image3_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/servicios/servicios.png",
      alt: t('services.gallery_image4_alt'),
      width: 600,
      height: 400,
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">{t('services.title')}</h1>
        <p className="text-lg mb-8">{t('services.description')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Categoría de Servicios Legales */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('services.legal_title')}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('services.legal_item1')}</li>
              <li>{t('services.legal_item2')}</li>
              <li>{t('services.legal_item3')}</li>
              <li>{t('services.legal_item4')}</li>
            </ul>
          </div>
          
          {/* Categoría de Servicios de Vivienda */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('services.housing_title')}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('services.housing_item1')}</li>
              <li>{t('services.housing_item2')}</li>
              <li>{t('services.housing_item3')}</li>
              <li>{t('services.housing_item4')}</li>
            </ul>
          </div>
          
          {/* Categoría de Servicios de Salud */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('services.health_title')}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('services.health_item1')}</li>
              <li>{t('services.health_item2')}</li>
              <li>{t('services.health_item3')}</li>
              <li>{t('services.health_item4')}</li>
            </ul>
          </div>
          
          {/* Categoría de Servicios de Educación */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('services.education_title')}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('services.education_item1')}</li>
              <li>{t('services.education_item2')}</li>
              <li>{t('services.education_item3')}</li>
              <li>{t('services.education_item4')}</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Galería de imágenes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t('services.gallery_title')}</h2>
        <ImageGallery 
          images={serviciosImages} 
          title={t('services.gallery_subtitle')} 
        />
      </section>
      
      {/* Sección CTA */}
      <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.cta_title')}</h2>
          <p className="text-xl mb-6">{t('services.cta_description')}</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            {t('services.cta_button')}
          </button>
        </div>
      </section>
    </main>
  );
}
