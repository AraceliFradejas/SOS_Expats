"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logos/logo_sos_expats.png"
            alt="SOS Expats Logo"
            width={220}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>
        
        <div className="flex items-center md:order-2">
          {/* Selector de idioma */}
          <div className="flex items-center space-x-2 mr-4">
            <button
              onClick={() => setLanguage('es')}
              className={`flex items-center ${language === 'es' ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity`}
              aria-label="Español"
            >
              <Image
                src="https://www.banderas-mundo.es/data/flags/w580/es.webp"
                alt="Bandera de España"
                width={28}
                height={20}
                className="h-5 w-auto border rounded"
              />
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`flex items-center ${language === 'en' ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity`}
              aria-label="English"
            >
              <Image
                src="https://www.banderas-mundo.es/data/flags/w580/gb.webp"
                alt="United Kingdom flag"
                width={28}
                height={20}
                className="h-5 w-auto border rounded"
              />
            </button>
          </div>
          
          {/* Botón del menú móvil */}
          <button 
            type="button" 
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <span className="sr-only">Abrir menú principal</span>
          </button>
        </div>
        
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/profesionales" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {t('nav_professionals')}
              </Link>
            </li>
            <li>
              <Link href="/expats" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {t('nav_expats')}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {t('nav_blog')}
              </Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {t('nav_about')}
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {t('nav_contact')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
