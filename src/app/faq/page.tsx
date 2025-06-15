"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("general");
  
  // Categorías de preguntas
  const categories = [
    { id: "general", name: t('faq.category_general') },
    { id: "legal", name: t('faq.category_legal') },
    { id: "housing", name: t('faq.category_housing') },
    { id: "health", name: t('faq.category_health') },
    { id: "work", name: t('faq.category_work') },
  ];
  
  // Datos de preguntas frecuentes por categoría
  const faqs = {
    general: [
      {
        question: t('faq.general_q1'),
        answer: t('faq.general_a1'),
      },
      {
        question: t('faq.general_q2'),
        answer: t('faq.general_a2'),
      },
      {
        question: t('faq.general_q3'),
        answer: t('faq.general_a3'),
      },
    ],
    legal: [
      {
        question: t('faq.legal_q1'),
        answer: t('faq.legal_a1'),
      },
      {
        question: t('faq.legal_q2'),
        answer: t('faq.legal_a2'),
      },
      {
        question: t('faq.legal_q3'),
        answer: t('faq.legal_a3'),
      },
    ],
    housing: [
      {
        question: t('faq.housing_q1'),
        answer: t('faq.housing_a1'),
      },
      {
        question: t('faq.housing_q2'),
        answer: t('faq.housing_a2'),
      },
      {
        question: t('faq.housing_q3'),
        answer: t('faq.housing_a3'),
      },
    ],
    health: [
      {
        question: t('faq.health_q1'),
        answer: t('faq.health_a1'),
      },
      {
        question: t('faq.health_q2'),
        answer: t('faq.health_a2'),
      },
      {
        question: t('faq.health_q3'),
        answer: t('faq.health_a3'),
      },
    ],
    work: [
      {
        question: t('faq.work_q1'),
        answer: t('faq.work_a1'),
      },
      {
        question: t('faq.work_q2'),
        answer: t('faq.work_a2'),
      },
      {
        question: t('faq.work_q3'),
        answer: t('faq.work_a3'),
      },
    ],
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">{t('faq.title')}</h1>
        <p className="text-lg mb-12">{t('faq.description')}</p>
        
        {/* Categorías de preguntas */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Lista de preguntas */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
            <details key={index} className="bg-white p-6 rounded-lg shadow-md">
              <summary className="text-xl font-semibold cursor-pointer">
                {faq.question}
              </summary>
              <div className="mt-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
      
      {/* Buscador de preguntas */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('faq.search_title')}</h2>
          <div className="relative">
            <input 
              type="text" 
              placeholder={t('faq.search_placeholder')}
              className="w-full p-4 pr-12 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* Sección de contacto */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">{t('faq.not_found_title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{t('faq.not_found_description')}</p>
        <Link href="/contacto" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
          {t('faq.contact_button')}
        </Link>
      </section>
      
      {/* Recursos adicionales */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.resources_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('faq.resource1_title')}</h3>
            <p>{t('faq.resource1_description')}</p>
            <Link href="/recursos" className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
              {t('faq.resource_link')}
            </Link>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('faq.resource2_title')}</h3>
            <p>{t('faq.resource2_description')}</p>
            <Link href="/servicios" className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
              {t('faq.resource_link')}
            </Link>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('faq.resource3_title')}</h3>
            <p>{t('faq.resource3_description')}</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
              {t('faq.resource_link')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
