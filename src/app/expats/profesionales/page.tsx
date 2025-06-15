'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function ExpatsProPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {t('expatsProfessionals')}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              {t('expatsProfessionalsDesc')}
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <h2 className="text-xl font-semibold text-green-900 mb-2">
                {t('comingSoon')}
              </h2>
              <p className="text-green-800">
                {t('comingSoonDesc')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                href="/expats" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                {t('backToExpats')}
              </Link>
              <Link 
                href="/contacto" 
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                {t('nav_contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
