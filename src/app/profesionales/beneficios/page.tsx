"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function BeneficiosProfesionales() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {t('professionals_benefits_title') || 'Beneficios para Profesionales'}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              {t('professionals_benefits_description') || 'Descubre todas las ventajas de formar parte de nuestra red de profesionales para expatriados.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {t('professionals_benefits_visibility') || 'Mayor Visibilidad'}
                </h3>
                <p className="text-blue-700">
                  {t('professionals_benefits_visibility_desc') || 'Aparece en nuestro directorio de profesionales verificados y aumenta tu presencia online.'}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {t('professionals_benefits_network') || 'Red de Contactos'}
                </h3>
                <p className="text-green-700">
                  {t('professionals_benefits_network_desc') || 'Conecta con otros profesionales y expatriados en tu área de especialización.'}
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  {t('professionals_benefits_marketing') || 'Herramientas de Marketing'}
                </h3>
                <p className="text-purple-700">
                  {t('professionals_benefits_marketing_desc') || 'Accede a herramientas de promoción y marketing especializado para expatriados.'}
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">
                  {t('professionals_benefits_support') || 'Soporte Especializado'}
                </h3>
                <p className="text-orange-700">
                  {t('professionals_benefits_support_desc') || 'Recibe formación y soporte sobre las necesidades específicas de los expatriados.'}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/profesionales/inscripcion"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {t('professionals_register_now') || 'Registrarse Ahora'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
