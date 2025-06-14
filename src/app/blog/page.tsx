"use client";

import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPage() {
  const { t } = useLanguage();
  
  // Definir imágenes para la galería del blog
  const blogImages = [
    {
      src: "/assets/images/blog/experiencia.png",
      alt: t('blog.gallery_image1_alt'),
      width: 600,
      height: 400,
    },
    // Reutilizamos la misma imagen para crear más ejemplos en la galería
    {
      src: "/assets/images/blog/experiencia.png",
      alt: t('blog.gallery_image2_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/blog/experiencia.png",
      alt: t('blog.gallery_image3_alt'),
      width: 600,
      height: 400,
    },
    {
      src: "/assets/images/blog/experiencia.png",
      alt: t('blog.gallery_image4_alt'),
      width: 600,
      height: 400,
    }
  ];
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">{t('blog.title')}</span>
              <span className="block text-blue-600 dark:text-blue-500">{t('blog.subtitle')}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('blog.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            {t('blog.category_all')}
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {t('blog.category_procedures')}
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {t('blog.category_housing')}
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {t('blog.category_taxes')}
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {t('blog.category_culture')}
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {t('blog.category_education')}
          </button>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gray-300 md:w-96 h-64 md:h-auto"></div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-indigo-400 font-semibold">Guía completa</div>
              <Link href="/blog/tramites-nie-espana" className="block mt-1 text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                Todo lo que debes saber sobre el NIE: Trámites y requisitos actualizados 2025
              </Link>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                La guía definitiva para obtener tu NIE (Número de Identidad de Extranjero) en España. Incluye todos los requisitos actualizados, proceso paso a paso y consejos para evitar problemas comunes.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-700 font-bold">MS</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    María Sánchez
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime="2025-05-15">15 Mayo, 2025</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>15 min de lectura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{t('blog.recent_articles')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">Vivienda</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">10 Mayo, 2025</time>
              </div>
              <Link href="/blog/alquilar-piso-espana" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                5 cosas que debes saber antes de alquilar un piso en España
              </Link>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Consejos prácticos y consideraciones legales importantes para expatriados que buscan alquilar vivienda en España.
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">JR</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Juan Ramírez</span>
              </div>
            </div>
          </div>
          
          {/* Post 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">Impuestos</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">2 Mayo, 2025</time>
              </div>
              <Link href="/blog/impuestos-autonomos-extranjeros" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                Guía de impuestos para autónomos extranjeros en España
              </Link>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Todo lo que necesitas saber sobre obligaciones fiscales, deducciones y cómo presentar tus impuestos como autónomo extranjero.
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">SR</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Sonia Rodríguez</span>
              </div>
            </div>
          </div>
          
          {/* Post 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded">Cultura</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">25 Abril, 2025</time>
              </div>
              <Link href="/blog/adaptacion-cultural-espana" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                Cómo superar el choque cultural en España
              </Link>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Consejos prácticos para adaptarse a la cultura española, costumbres locales y evitar malentendidos culturales comunes.
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">LM</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Laura Méndez</span>
              </div>
            </div>
          </div>
          
          {/* Post 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded">Educación</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">18 Abril, 2025</time>
              </div>
              <Link href="/blog/sistema-educativo-espana" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                El sistema educativo español: opciones para familias expatriadas
              </Link>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Análisis de las diferentes opciones educativas disponibles para hijos de expatriados en España, desde colegios públicos hasta internacionales.
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">AP</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Ana Pérez</span>
              </div>
            </div>
          </div>
          
          {/* Post 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-semibold px-2.5 py-0.5 rounded">Salud</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">10 Abril, 2025</time>
              </div>
              <Link href="/blog/sistema-sanitario-espanol" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                Guía del sistema sanitario español para expatriados
              </Link>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Todo lo que necesitas saber sobre el acceso a la sanidad pública, seguros privados y atención médica como extranjero en España.
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">CG</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Carlos González</span>
              </div>
            </div>
          </div>
          
          {/* Post 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">Trámites</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">2 Abril, 2025</time>
              </div>
              <Link href="/blog/cuenta-bancaria-espana-extranjeros" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                Cómo abrir una cuenta bancaria en España como extranjero
              </Link>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Requisitos, documentación necesaria y comparativa de los principales bancos para expatriados en España.
              </p>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">EM</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Elena Martín</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{t('blog.gallery_title')}</h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">{t('blog.gallery_description')}</p>
        
        <ImageGallery 
          images={blogImages} 
          title={t('blog.gallery_subtitle')} 
        />
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-300 rounded-l-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
              Anterior
            </a>
            <a href="#" className="py-2 px-4 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900 dark:text-white border border-gray-300 dark:border-gray-600">
              1
            </a>
            <a href="#" className="py-2 px-4 text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
              2
            </a>
            <a href="#" className="py-2 px-4 text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
              3
            </a>
            <a href="#" className="py-2 px-4 text-sm font-medium text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-300 rounded-r-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
              Siguiente
            </a>
          </nav>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-blue-100 dark:bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-4">{t('blog.newsletter_title')}</h2>
            <p className="text-lg text-blue-600 dark:text-blue-200 mb-6">
              {t('blog.newsletter_description')}
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={t('blog.newsletter_placeholder')} 
                  className="px-4 py-2 w-full sm:w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  {t('blog.newsletter_button')}
                </button>
              </form>
              <p className="text-sm text-blue-600 dark:text-blue-300 mt-2">
                {t('blog.newsletter_privacy')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
