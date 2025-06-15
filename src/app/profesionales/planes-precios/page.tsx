"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function PlanesPreciosProfesionales() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('professionals_plans_pricing') || 'Planes y Precios'}
          </h1>
          <p className="text-xl text-gray-600">
            {t('professionals_choose_plan') || 'Elige el plan que mejor se adapte a tu negocio y necesidades profesionales.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('professionals_basic_plan') || 'Plan Básico'}
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                €0<span className="text-lg text-gray-500">/mes</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Perfil básico en el directorio</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Hasta 3 servicios listados</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Información de contacto básica</span>
              </li>
            </ul>
            
            <Link 
              href="/profesionales/inscripcion"
              className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
            >
              Comenzar Gratis
            </Link>
          </div>

          {/* Plan Premium */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Recomendado
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('professionals_premium_plan') || 'Plan Premium'}
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                €29<span className="text-lg text-gray-500">/mes</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Perfil destacado</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Servicios ilimitados</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Galería de fotos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Estadísticas detalladas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Soporte prioritario</span>
              </li>
            </ul>
            
            <Link 
              href="/profesionales/inscripcion"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
            >
              Elegir Premium
            </Link>
          </div>

          {/* Plan Enterprise */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {t('professionals_custom_pricing') || 'Personalizado'}
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Todo lo del Plan Premium</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Múltiples ubicaciones</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">API personalizada</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Gestor de cuenta dedicado</span>
              </li>
            </ul>
            
            <Link 
              href="/contacto"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
