"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from 'next/link';

export default function Recursos() {
  const { t } = useLanguage();

  // Datos de recursos por categoría
  const categories = [
    {
      id: "legal",
      name: t('resources.legal_category'),
      resources: [
        {
          title: t('resources.legal_resource1_title'),
          description: t('resources.legal_resource1_description'),
          link: "#",
        },
        {
          title: t('resources.legal_resource2_title'),
          description: t('resources.legal_resource2_description'),
          link: "#",
        },
        {
          title: t('resources.legal_resource3_title'),
          description: t('resources.legal_resource3_description'),
          link: "#",
        },
      ]
    },
    {
      id: "housing",
      name: t('resources.housing_category'),
      resources: [
        {
          title: t('resources.housing_resource1_title'),
          description: t('resources.housing_resource1_description'),
          link: "#",
        },
        {
          title: t('resources.housing_resource2_title'),
          description: t('resources.housing_resource2_description'),
          link: "#",
        },
        {
          title: t('resources.housing_resource3_title'),
          description: t('resources.housing_resource3_description'),
          link: "#",
        },
      ]
    },
    {
      id: "education",
      name: t('resources.education_category'),
      resources: [
        {
          title: t('resources.education_resource1_title'),
          description: t('resources.education_resource1_description'),
          link: "#",
        },
        {
          title: t('resources.education_resource2_title'),
          description: t('resources.education_resource2_description'),
          link: "#",
        },
        {
          title: t('resources.education_resource3_title'),
          description: t('resources.education_resource3_description'),
          link: "#",
        },
      ]
    },
    {
      id: "culture",
      name: t('resources.culture_category'),
      resources: [
        {
          title: t('resources.culture_resource1_title'),
          description: t('resources.culture_resource1_description'),
          link: "#",
        },
        {
          title: t('resources.culture_resource2_title'),
          description: t('resources.culture_resource2_description'),
          link: "#",
        },
        {
          title: t('resources.culture_resource3_title'),
          description: t('resources.culture_resource3_description'),
          link: "#",
        },
      ]
    },
  ];

  // Datos para la sección de descargas
  const downloads = [
    {
      title: t('resources.download1_title'),
      description: t('resources.download1_description'),
      icon: "📋",
    },
    {
      title: t('resources.download2_title'),
      description: t('resources.download2_description'),
      icon: "🏠",
    },
    {
      title: t('resources.download3_title'),
      description: t('resources.download3_description'),
      icon: "💼",
    },
    {
      title: t('resources.download4_title'),
      description: t('resources.download4_description'),
      icon: "🗂️",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">{t('resources.title')}</h1>
        <p className="text-lg mb-12">{t('resources.description')}</p>
        
        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            {t('resources.all_categories')}
          </button>
          {categories.map(category => (
            <button 
              key={category.id}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Lista de recursos */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Link href={resource.link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      {t('resources.read_more')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sección de guías descargables */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('resources.downloads_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                {t('resources.download_button')}
              </button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sección de preguntas frecuentes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t('resources.faq_title')}</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{t('resources.faq1_question')}</h3>
            <p className="text-gray-600">{t('resources.faq1_answer')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{t('resources.faq2_question')}</h3>
            <p className="text-gray-600">{t('resources.faq2_answer')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{t('resources.faq3_question')}</h3>
            <p className="text-gray-600">{t('resources.faq3_answer')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{t('resources.faq4_question')}</h3>
            <p className="text-gray-600">{t('resources.faq4_answer')}</p>
          </div>
        </div>
      </section>
      
      {/* CTA para contacto */}
      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">{t('resources.cta_title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{t('resources.cta_description')}</p>
        <Link href="/contacto" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
          {t('resources.cta_button')}
        </Link>
      </section>
    </main>
  );
}
