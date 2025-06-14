"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">{t('footer_title')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('footer_description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{t('footer_professionals')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profesionales/unete-al-directorio" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_join_directory')}
                </Link>
              </li>
              <li>
                <Link href="/profesionales/planes-precios" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_plans_pricing')}
                </Link>
              </li>
              <li>
                <Link href="/profesionales/beneficios" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_benefits')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{t('footer_expats')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/expats/buscar-servicios" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_find_services')}
                </Link>
              </li>
              <li>
                <Link href="/expats/estudiantes" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_students')}
                </Link>
              </li>
              <li>
                <Link href="/expats/profesionales" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_professionals_expat')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{t('footer_legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos-condiciones" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_terms')}
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('footer_privacy')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400">
                  {t('nav_blog')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-300 dark:border-gray-600" />
        
        <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">{t('footer_important_notice_title')}</h3>
              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  {t('footer_important_notice_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {t('footer_copyright')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/AraceliFradejas/SOS_Expats" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
              </svg>
            </a>
            <a href="https://x.com/AraceliFradejas" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400">
              <span className="sr-only">Twitter (X)</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@aracelifradejasmunoz2758" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400">
              <span className="sr-only">YouTube</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://medium.com/@araceli.fradejas" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400">
              <span className="sr-only">Medium</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
