"use client";

import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-4">
      <main className="max-w-7xl w-full flex flex-col items-center justify-center text-center">
        <HeroCarousel />
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-800 dark:text-blue-400">
            {t('home_title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300">
            {t('home_subtitle')}
          </p>
          
          {/* CTA Section for Forms */}
          <div className="mt-12 p-8 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">{t('home_cta_forms_title')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t('home_cta_forms_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/profesionales/inscripcion" 
                className="px-6 py-3 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                prefetch={true}
              >
                📝 {t('home_cta_register_professional')}
              </Link>
              <Link 
                href="/solicitar-servicio"
                className="px-6 py-3 text-base font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                prefetch={true}
              >
                🔍 {t('home_cta_request_service')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">{t('home_feature_1_title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('home_feature_1_desc')}</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">{t('home_feature_2_title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('home_feature_2_desc')}</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">{t('home_feature_3_title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('home_feature_3_desc')}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
