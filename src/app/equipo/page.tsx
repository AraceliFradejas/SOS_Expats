"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

export default function Equipo() {
  const { t } = useLanguage();
  
  // Definir imágenes para la galería del equipo
  const equipoImages = [
    {
      src: "/assets/images/equipo/profesionales.png",
      alt: t('team.gallery_image1_alt'),
      width: 600,
      height: 400,
    },
    // Reutilizamos la misma imagen para crear más ejemplos en la galería
    {
      src: "/assets/images/equipo/profesionales.png",
      alt: t('team.gallery_image2_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/equipo/profesionales.png",
      alt: t('team.gallery_image3_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/equipo/profesionales.png",
      alt: t('team.gallery_image4_alt'),
      width: 600,
      height: 400,
    }
  ];

  // Datos de miembros del equipo
  const teamMembers = [
    {
      name: "Laura Martínez",
      position: t('team.position_ceo'),
      description: t('team.member1_description'),
      image: "/assets/images/equipo/profesionales.png",
    },
    {
      name: "Carlos Rodríguez",
      position: t('team.position_legal'),
      description: t('team.member2_description'),
      image: "/assets/images/equipo/profesionales.png",
    },
    {
      name: "Sofia García",
      position: t('team.position_community'),
      description: t('team.member3_description'),
      image: "/assets/images/equipo/profesionales.png",
    },
    {
      name: "Miguel López",
      position: t('team.position_housing'),
      description: t('team.member4_description'),
      image: "/assets/images/equipo/profesionales.png",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Cabecera de la página */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">{t('team.title')}</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">{t('team.description')}</p>
      </section>
      
      {/* Equipo principal */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('team.leadership_title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Valores del equipo */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('team.values_title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t('team.value1_title')}</h3>
            <p className="text-gray-600">{t('team.value1_description')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t('team.value2_title')}</h3>
            <p className="text-gray-600">{t('team.value2_description')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t('team.value3_title')}</h3>
            <p className="text-gray-600">{t('team.value3_description')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t('team.value4_title')}</h3>
            <p className="text-gray-600">{t('team.value4_description')}</p>
          </div>
        </div>
      </section>
      
      {/* Galería de imágenes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('team.gallery_title')}</h2>
        <ImageGallery 
          images={equipoImages} 
          title={t('team.gallery_subtitle')} 
        />
      </section>
      
      {/* CTA para unirse al equipo */}
      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">{t('team.join_title')}</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">{t('team.join_description')}</p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
          {t('team.join_button')}
        </button>
      </section>
    </main>
  );
}
