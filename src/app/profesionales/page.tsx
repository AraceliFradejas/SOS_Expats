"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProfesionalesPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">{t('professionals_title') || 'Para Profesionales'}</span>
                <span className="block text-blue-600 dark:text-blue-500">{t('professionals_subtitle') || 'Expande tu negocio con clientes expatriados'}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto md:mx-0 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl">
                {t('professionals_description') || 'Únete a nuestra red de profesionales de confianza y accede a un mercado creciente de expatriados que necesitan tus servicios.'}
              </p>
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-8">
              <Image 
                src="/assets/images/profesionales/profesionales.png" 
                alt="Profesionales para expatriados" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('professionals_join_directory') || 'Únete al Directorio'}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('professionals_create_profile') || 'Crea tu perfil profesional para que los expatriados puedan encontrar tus servicios fácilmente.'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{t('professionals_custom_profile') || 'Perfil personalizado'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{t('professionals_credentials') || 'Verificación de credenciales'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{t('professionals_dashboard') || 'Panel de gestión'}</span>
                </li>
              </ul>
              <Link href="/profesionales/unete-al-directorio" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition-colors duration-300">
                {t('professionals_register_now') || 'Regístrate ahora'}
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('professionals_plans_pricing') || 'Planes y Precios'}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('professionals_choose_plan') || 'Elige el plan que mejor se adapte a tu negocio y necesidades profesionales.'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{t('professionals_basic_plan') || 'Plan Básico gratuito'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{t('professionals_premium_plan') || 'Plan Premium con características avanzadas'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{t('professionals_billing') || 'Facturación mensual o anual'}</span>
                </li>
              </ul>
              <Link href="/profesionales/planes-precios" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition-colors duration-300">
                {t('professionals_view_plans') || 'Ver planes'}
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Beneficios</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Descubre todas las ventajas de formar parte de nuestra plataforma para profesionales.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Mayor visibilidad</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Red de contactos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Herramientas de marketing</span>
                </li>
              </ul>
              <Link href="/profesionales/beneficios" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition-colors duration-300">
                Descubrir más
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Lo que dicen nuestros profesionales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                &ldquo;Unirme a SOS Expats ha sido una de las mejores decisiones para mi despacho. He aumentado mi clientela extranjera en un 40% este año.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">RL</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Raquel López</p>
                  <p className="text-gray-500 dark:text-gray-400">Abogada, Madrid</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                &ldquo;La plataforma me ha permitido llegar a clientes que de otra forma nunca habría podido acceder. El proceso de verificación da mucha confianza.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">CM</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Carlos Martínez</p>
                  <p className="text-gray-500 dark:text-gray-400">Asesor Fiscal, Barcelona</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                &ldquo;Las herramientas de marketing que ofrecen han sido clave para diferenciar mis servicios. Recomiendo el plan Premium a todos los profesionales.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">SG</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Sara González</p>
                  <p className="text-gray-500 dark:text-gray-400">Inmobiliaria, Valencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-700 dark:bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">¿Listo para unirte a nuestra comunidad?</h2>
          <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-8">
            Comienza hoy mismo y conecta con expatriados que necesitan tus servicios profesionales.
          </p>
          <Link href="/profesionales/unete-al-directorio" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            Crear mi perfil
          </Link>
        </div>
      </div>
    </div>
  );
}
