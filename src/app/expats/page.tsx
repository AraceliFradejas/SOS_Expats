"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExpatsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">{t('expats_title')}</span>
                <span className="block text-green-600 dark:text-green-500">{t('expats_subtitle')}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto md:mx-0 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl">
                {t('expats_description')}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image 
                src="/assets/images/expats/expatriates.png" 
                alt="Expatriados en España" 
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('expats_search_services')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Encuentra profesionales verificados que pueden ayudarte con tus necesidades específicas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Asesoría Legal</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Inmobiliaria</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Gestiones Administrativas</span>
                </li>
              </ul>
              <Link href="/expats/buscar-servicios" className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center transition-colors duration-300">
                {t('expats_search_now')}
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('expats_for_students')}</h2>                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('expats_students_description') || 'Recursos especializados para estudiantes internacionales en España.'}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{t('expats_students_guide') || 'Guía de llegada'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{t('expats_students_procedures') || 'Trámites universitarios'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{t('expats_students_life') || 'Vida estudiantil'}</span>
                  </li>
                </ul>
                <Link href="/expats/estudiantes" className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center transition-colors duration-300">
                  {t('expats_see_guides') || 'Ver guías'}
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('expats_for_professionals')}</h2>                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('expats_professionals_description') || 'Información para expatriados que trabajan o buscan empleo en España.'}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{t('expats_job_search') || 'Búsqueda de empleo'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{t('expats_freelance') || 'Trabajo autónomo'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{t('expats_networking') || 'Networking'}</span>
                  </li>
                </ul>
                <Link href="/expats/profesionales" className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-center transition-colors duration-300">
                  {t('expats_explore_resources') || 'Explorar recursos'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Services */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t('expats_featured_services') || 'Servicios destacados'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Asesoría Legal</h3>
              <p className="text-gray-600 dark:text-gray-300">Abogados especializados en extranjería, contratos y trámites legales.</p>
              <Link href="/expats/buscar-servicios" className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline">
                Ver servicios →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inmobiliaria</h3>
              <p className="text-gray-600 dark:text-gray-300">Agentes inmobiliarios que te ayudarán a encontrar tu hogar ideal en España.</p>
              <Link href="/expats/buscar-servicios" className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline">
                Ver servicios →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Trámites Administrativos</h3>
              <p className="text-gray-600 dark:text-gray-300">Gestores que te ayudarán con el papeleo, NIE, empadronamiento y más.</p>
              <Link href="/expats/buscar-servicios" className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline">
                Ver servicios →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Asesoría Financiera</h3>
              <p className="text-gray-600 dark:text-gray-300">Asesores financieros y contables que te ayudarán con tus impuestos y finanzas.</p>
              <Link href="/expats/buscar-servicios" className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline">
                Ver servicios →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t('expats_testimonials') || 'Experiencias de expatriados'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                &ldquo;SOS Expats hizo que mi mudanza a Madrid fuera mucho más fácil. Encontré un abogado que hablaba inglés y me ayudó con todos los trámites necesarios.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">John Davis</p>
                  <p className="text-gray-500 dark:text-gray-400">Reino Unido, viviendo en Madrid</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                &ldquo;Como estudiante en Barcelona, la guía de SOS Expats me ayudó a entender todos los trámites universitarios y encontrar alojamiento.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">SO</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Sophie Olsen</p>
                  <p className="text-gray-500 dark:text-gray-400">Dinamarca, estudiante en Barcelona</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                &ldquo;Gracias a la asesoría fiscal que encontré en SOS Expats, pude establecerme como autónomo en Valencia sin complicaciones burocráticas.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">AM</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Alessandro Mancini</p>
                  <p className="text-gray-500 dark:text-gray-400">Italia, emprendedor en Valencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-green-700 dark:bg-green-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">{t('expats_cta_title') || '¿Necesitas ayuda con tu vida en España?'}</h2>
          <p className="max-w-2xl mx-auto text-xl text-green-100 mb-8">
            {t('expats_cta_description') || 'Encuentra profesionales de confianza que hablan tu idioma y conocen las necesidades de los expatriados.'}
          </p>
          <Link href="/expats/buscar-servicios" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors duration-300">
            {t('expats_search_services') || 'Buscar servicios'}
          </Link>
        </div>
      </div>
    </div>
  );
}
