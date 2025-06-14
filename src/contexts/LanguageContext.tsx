"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Definimos los idiomas disponibles
type Language = 'es' | 'en';

// Definimos las traducciones
type Translations = {
  [key: string]: {
    es: string;
    en: string;
  };
};

const translations: Translations = {
  // Navbar
  nav_professionals: {
    es: "Profesionales",
    en: "Professionals"
  },
  nav_expats: {
    es: "Expats",
    en: "Expats"
  },
  nav_blog: {
    es: "Blog",
    en: "Blog"
  },
  nav_about: {
    es: "Sobre Nosotros",
    en: "About Us"
  },
  nav_contact: {
    es: "Contacto",
    en: "Contact"
  },
  
  // Home
  home_title: {
    es: "SOS Expats",
    en: "SOS Expats"
  },
  home_subtitle: {
    es: "Conectando expatriados con profesionales locales para facilitar su adaptación en España",
    en: "Connecting expatriates with local professionals to facilitate their adaptation in Spain"
  },
  home_cta_professional: {
    es: "SOY UN PROFESIONAL",
    en: "I AM A PROFESSIONAL"
  },
  home_cta_expat: {
    es: "SOY UN EXPAT",
    en: "I AM AN EXPAT"
  },
  home_feature_1_title: {
    es: "Amplia Red de Profesionales",
    en: "Wide Network of Professionals"
  },
  home_feature_1_desc: {
    es: "Accede a una red verificada de profesionales especializados en servicios para expatriados.",
    en: "Access a verified network of professionals specialized in services for expatriates."
  },
  home_feature_2_title: {
    es: "Información Localizada",
    en: "Localized Information"
  },
  home_feature_2_desc: {
    es: "Guías y recursos adaptados a las necesidades específicas de expatriados en España.",
    en: "Guides and resources tailored to the specific needs of expatriates in Spain."
  },
  home_feature_3_title: {
    es: "Comunidad Activa",
    en: "Active Community"
  },
  home_feature_3_desc: {
    es: "Conecta con otros expatriados y profesionales para compartir experiencias y consejos.",
    en: "Connect with other expatriates and professionals to share experiences and advice."
  },
  
  // Footer
  footer_title: {
    es: "SOS Expats",
    en: "SOS Expats"
  },
  footer_description: {
    es: "Conectando expatriados con profesionales locales para facilitar su adaptación en España.",
    en: "Connecting expatriates with local professionals to facilitate their adaptation in Spain."
  },
  footer_professionals: {
    es: "Para Profesionales",
    en: "For Professionals"
  },
  footer_join_directory: {
    es: "Únete al Directorio",
    en: "Join the Directory"
  },
  footer_plans_pricing: {
    es: "Planes y Precios",
    en: "Plans and Pricing"
  },
  footer_benefits: {
    es: "Beneficios",
    en: "Benefits"
  },
  footer_expats: {
    es: "Para Expats",
    en: "For Expats"
  },
  footer_find_services: {
    es: "Buscar Servicios",
    en: "Find Services"
  },
  footer_students: {
    es: "Estudiantes",
    en: "Students"
  },
  footer_professionals_expat: {
    es: "Profesionales",
    en: "Professionals"
  },
  footer_legal: {
    es: "Legal",
    en: "Legal"
  },
  footer_terms: {
    es: "Términos y Condiciones",
    en: "Terms and Conditions"
  },
  footer_privacy: {
    es: "Política de Privacidad",
    en: "Privacy Policy"
  },
  footer_important_notice_title: {
    es: "NOTA MUY IMPORTANTE:",
    en: "IMPORTANT NOTICE:"
  },
  footer_important_notice_text: {
    es: "Esta página es un ejercicio realizado por Araceli Fradejas Muñoz como parte de la entrega del Trabajo Final de la Asignatura de Marketing Analytics del Máster en Marketing Digital y Analytics + Máster en IA Empresarial de la escuela ENEB. No representa este site a una empresa real.",
    en: "This page is an exercise carried out by Araceli Fradejas Muñoz as part of the Final Project for the Marketing Analytics Course of the Master in Digital Marketing and Analytics + Master in Business AI at ENEB school. This site does not represent a real company."
  },
  footer_copyright: {
    es: "© {year} Araceli Fradejas Muñoz. Todos los derechos reservados.",
    en: "© {year} Araceli Fradejas Muñoz. All rights reserved."
  },
  
  // Página Expats
  expats_title: {
    es: "Para Expatriados en España",
    en: "For Expatriates in Spain"
  },
  expats_subtitle: {
    es: "Todo lo que necesitas para adaptarte con facilidad",
    en: "Everything you need to adapt easily"
  },
  expats_description: {
    es: "Recursos y servicios adaptados específicamente para resolver las necesidades más comunes de los expatriados en España.",
    en: "Resources and services specifically adapted to solve the most common needs of expatriates in Spain."
  },
  expats_search_services: {
    es: "Buscar Servicios",
    en: "Search Services"
  },
  expats_search_now: {
    es: "Buscar ahora",
    en: "Search now"
  },
  expats_for_students: {
    es: "Para Estudiantes",
    en: "For Students"
  },
  expats_for_professionals: {
    es: "Para Profesionales",
    en: "For Professionals"
  },
  expats_students_description: {
    es: "Recursos especializados para estudiantes internacionales en España.",
    en: "Specialized resources for international students in Spain."
  },
  expats_students_guide: {
    es: "Guía de llegada",
    en: "Arrival guide"
  },
  expats_students_procedures: {
    es: "Trámites universitarios",
    en: "University procedures"
  },
  expats_students_life: {
    es: "Vida estudiantil",
    en: "Student life"
  },
  expats_see_guides: {
    es: "Ver guías",
    en: "See guides"
  },
  expats_professionals_description: {
    es: "Información para expatriados que trabajan o buscan empleo en España.",
    en: "Information for expatriates who work or seek employment in Spain."
  },
  expats_job_search: {
    es: "Búsqueda de empleo",
    en: "Job search"
  },
  expats_freelance: {
    es: "Trabajo autónomo",
    en: "Freelance work"
  },
  expats_networking: {
    es: "Networking",
    en: "Networking"
  },
  expats_explore_resources: {
    es: "Explorar recursos",
    en: "Explore resources"
  },
  expats_featured_services: {
    es: "Servicios destacados",
    en: "Featured services"
  },
  expats_testimonials: {
    es: "Experiencias de expatriados",
    en: "Expatriate experiences"
  },
  expats_cta_title: {
    es: "¿Necesitas ayuda con tu vida en España?",
    en: "Need help with your life in Spain?"
  },
  expats_cta_description: {
    es: "Encuentra profesionales de confianza que hablan tu idioma y conocen las necesidades de los expatriados.",
    en: "Find trusted professionals who speak your language and understand the needs of expatriates."
  },
  
  // Página Profesionales
  professionals_title: {
    es: "Para Profesionales",
    en: "For Professionals"
  },
  professionals_subtitle: {
    es: "Expande tu negocio con clientes expatriados",
    en: "Expand your business with expatriate clients"
  },
  professionals_description: {
    es: "Únete a nuestra red de profesionales de confianza y accede a un mercado creciente de expatriados que necesitan tus servicios.",
    en: "Join our network of trusted professionals and access a growing market of expatriates who need your services."
  },
  professionals_join_now: {
    es: "Únete ahora",
    en: "Join now"
  },
  professionals_join_directory: {
    es: "Únete al Directorio",
    en: "Join the Directory"
  },
  professionals_create_profile: {
    es: "Crea tu perfil profesional para que los expatriados puedan encontrar tus servicios fácilmente.",
    en: "Create your professional profile so expatriates can easily find your services."
  },
  professionals_custom_profile: {
    es: "Perfil personalizado",
    en: "Custom profile"
  },
  professionals_credentials: {
    es: "Verificación de credenciales",
    en: "Credentials verification"
  },
};

// Interfaz para el contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Crear contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es');

  // Cargar preferencia de idioma al inicio
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar preferencia de idioma
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Función para traducir
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    const translation = translations[key][language];
    
    if (key === 'footer_copyright') {
      return translation.replace('{year}', new Date().getFullYear().toString());
    }
    
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
