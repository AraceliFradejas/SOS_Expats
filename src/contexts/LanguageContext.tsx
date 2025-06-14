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
  
  // Chat
  chat: {
    es: "Chat",
    en: "Chat"
  },
  chat_title: {
    es: "Asistente SOS Expats",
    en: "SOS Expats Assistant"
  },
  'chat.welcome': {
    es: "¡Hola! Soy el asistente virtual de SOS Expats. ¿En qué puedo ayudarte hoy?",
    en: "Hello! I'm the SOS Expats virtual assistant. How can I help you today?"
  },
  'chat.buttonLabel': {
    es: "Chat de ayuda",
    en: "Help Chat"
  },
  'chat.autoResponse': {
    es: "Gracias por tu mensaje. Un representante de SOS Expats se pondrá en contacto contigo pronto. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?",
    en: "Thank you for your message. A SOS Expats representative will contact you soon. In the meantime, is there anything else I can help you with?"
  },
  'chat.inputPlaceholder': {
    es: "Escribe tu mensaje aquí...",
    en: "Type your message here..."
  },
  'chat.title': {
    es: "Chat de Soporte",
    en: "Support Chat"
  },
  // ...existing code...
  
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
  
  // Página de Servicios
  'services.title': {
    es: "Nuestros Servicios",
    en: "Our Services"
  },
  'services.description': {
    es: "Ofrecemos una amplia gama de servicios diseñados para facilitar la vida de los expatriados en España. Desde asesoramiento legal hasta búsqueda de vivienda y acceso a servicios de salud.",
    en: "We offer a wide range of services designed to make life easier for expatriates in Spain. From legal advice to housing search and access to health services."
  },
  'services.legal_title': {
    es: "Servicios Legales",
    en: "Legal Services"
  },
  'services.legal_item1': {
    es: "Trámites de visados y residencia",
    en: "Visa and residence procedures"
  },
  'services.legal_item2': {
    es: "Asesoramiento fiscal para expatriados",
    en: "Tax advice for expatriates"
  },
  'services.legal_item3': {
    es: "Trámites ante administraciones públicas",
    en: "Procedures with public administrations"
  },
  'services.legal_item4': {
    es: "Homologación de títulos",
    en: "Title homologation"
  },
  'services.housing_title': {
    es: "Servicios de Vivienda",
    en: "Housing Services"
  },
  'services.housing_item1': {
    es: "Búsqueda de alojamiento",
    en: "Housing search"
  },
  'services.housing_item2': {
    es: "Revisión de contratos de alquiler",
    en: "Rental contract review"
  },
  'services.housing_item3': {
    es: "Servicios de mudanza",
    en: "Moving services"
  },
  'services.housing_item4': {
    es: "Compra de propiedad en España",
    en: "Property purchase in Spain"
  },
  'services.health_title': {
    es: "Servicios de Salud",
    en: "Health Services"
  },
  'services.health_item1': {
    es: "Acceso al sistema sanitario",
    en: "Access to health system"
  },
  'services.health_item2': {
    es: "Médicos que hablan múltiples idiomas",
    en: "Doctors who speak multiple languages"
  },
  'services.health_item3': {
    es: "Seguros de salud para expatriados",
    en: "Health insurance for expatriates"
  },
  'services.health_item4': {
    es: "Servicios psicológicos multiculturales",
    en: "Multicultural psychological services"
  },
  'services.education_title': {
    es: "Servicios de Educación",
    en: "Education Services"
  },
  'services.education_item1': {
    es: "Escuelas internacionales y bilingües",
    en: "International and bilingual schools"
  },
  'services.education_item2': {
    es: "Cursos de español para extranjeros",
    en: "Spanish courses for foreigners"
  },
  'services.education_item3': {
    es: "Integración académica para niños",
    en: "Academic integration for children"
  },
  'services.education_item4': {
    es: "Formación profesional y universitaria",
    en: "Professional and university training"
  },
  'services.gallery_title': {
    es: "Galería de Servicios",
    en: "Services Gallery"
  },
  'services.gallery_subtitle': {
    es: "Nuestros profesionales en acción",
    en: "Our professionals in action"
  },
  'services.gallery_image1_alt': {
    es: "Servicio de asesoramiento legal",
    en: "Legal advisory service"
  },
  'services.gallery_image2_alt': {
    es: "Búsqueda de vivienda para expatriados",
    en: "Housing search for expatriates"
  },
  'services.gallery_image3_alt': {
    es: "Servicios de salud para extranjeros",
    en: "Health services for foreigners"
  },
  'services.gallery_image4_alt': {
    es: "Asesoramiento educativo internacional",
    en: "International educational advice"
  },
  'services.cta_title': {
    es: "¿Necesitas un servicio específico?",
    en: "Need a specific service?"
  },
  'services.cta_description': {
    es: "Contamos con una red de profesionales especializados listos para ayudarte",
    en: "We have a network of specialized professionals ready to help you"
  },
  'services.cta_button': {
    es: "Contáctanos",
    en: "Contact Us"
  },
  
  // Página de Testimonios
  'testimonials.title': {
    es: "Testimonios de Expatriados",
    en: "Expatriate Testimonials"
  },
  'testimonials.description': {
    es: "Descubre las experiencias reales de expatriados que han utilizado nuestros servicios para su adaptación en España.",
    en: "Discover the real experiences of expatriates who have used our services for their adaptation in Spain."
  },
  'testimonials.from': {
    es: "de",
    en: "from"
  },
  'testimonials.testimonial1_text': {
    es: "SOS Expats fue fundamental para mi adaptación en Madrid. Gracias a ellos, encontré un apartamento ideal y me ayudaron con todos los trámites legales. ¡Su servicio es impecable!",
    en: "SOS Expats was crucial for my adaptation in Madrid. Thanks to them, I found an ideal apartment and they helped me with all the legal procedures. Their service is impeccable!"
  },
  'testimonials.testimonial2_text': {
    es: "Cuando llegué a Barcelona, no hablaba español y estaba perdido con los trámites. El equipo de SOS Expats me asignó un asistente personal que me guió en todo momento. Gracias a ellos, mi transición fue mucho más fácil.",
    en: "When I arrived in Barcelona, I didn't speak Spanish and was lost with the procedures. The SOS Expats team assigned me a personal assistant who guided me at all times. Thanks to them, my transition was much easier."
  },
  'testimonials.testimonial3_text': {
    es: "Encontrar escuelas para mis hijos era mi mayor preocupación. SOS Expats no solo me ayudó a encontrar excelentes escuelas internacionales, sino que también me apoyó con la integración de toda mi familia. Estamos muy agradecidos.",
    en: "Finding schools for my children was my biggest concern. SOS Expats not only helped me find excellent international schools, but also supported me with the integration of my entire family. We are very grateful."
  },
  'testimonials.testimonial4_text': {
    es: "Los servicios de asesoría fiscal para expatriados de SOS Expats me ahorraron mucho dinero y dolores de cabeza. Su equipo conoce perfectamente la legislación española y las particularidades para extranjeros.",
    en: "SOS Expats' tax advisory services for expatriates saved me a lot of money and headaches. Their team perfectly understands Spanish legislation and particularities for foreigners."
  },
  'testimonials.gallery_title': {
    es: "Eventos con Nuestra Comunidad",
    en: "Events with Our Community"
  },
  'testimonials.gallery_description': {
    es: "Organizamos regularmente eventos para conectar a expatriados y profesionales en un ambiente relajado.",
    en: "We regularly organize events to connect expatriates and professionals in a relaxed environment."
  },
  'testimonials.gallery_subtitle': {
    es: "Momentos compartidos",
    en: "Shared moments"
  },
  'testimonials.gallery_image1_alt': {
    es: "Networking para expatriados en Madrid",
    en: "Networking for expatriates in Madrid"
  },
  'testimonials.gallery_image2_alt': {
    es: "Taller sobre adaptación cultural en España",
    en: "Workshop on cultural adaptation in Spain"
  },
  'testimonials.gallery_image3_alt': {
    es: "Evento social para nuevos expatriados",
    en: "Social event for new expatriates"
  },
  'testimonials.gallery_image4_alt': {
    es: "Conferencia sobre oportunidades laborales para extranjeros",
    en: "Conference on job opportunities for foreigners"
  },
  'testimonials.stats_title': {
    es: "El Impacto de SOS Expats",
    en: "The Impact of SOS Expats"
  },
  'testimonials.stats_expats': {
    es: "Expatriados Asistidos",
    en: "Expatriates Assisted"
  },
  'testimonials.stats_satisfaction': {
    es: "Índice de Satisfacción",
    en: "Satisfaction Rate"
  },
  'testimonials.stats_countries': {
    es: "Países de Origen",
    en: "Countries of Origin"
  },
  'testimonials.stats_professionals': {
    es: "Profesionales en Red",
    en: "Professionals in Network"
  },
  'testimonials.share_title': {
    es: "¿Tienes una Historia que Compartir?",
    en: "Do You Have a Story to Share?"
  },
  'testimonials.share_description': {
    es: "Si has utilizado nuestros servicios y quieres compartir tu experiencia, nos encantaría conocer tu historia y cómo te ayudamos en tu adaptación a España.",
    en: "If you have used our services and want to share your experience, we would love to hear your story and how we helped you adapt to Spain."
  },
  'testimonials.share_button': {
    es: "Compartir Mi Experiencia",
    en: "Share My Experience"
  },
  
  // Página de Blog
  'blog.title': {
    es: "Blog de SOS Expats",
    en: "SOS Expats Blog"
  },
  'blog.subtitle': {
    es: "Información útil para expatriados",
    en: "Useful information for expatriates"
  },
  'blog.description': {
    es: "Artículos, guías y consejos para facilitar tu vida como expatriado en España.",
    en: "Articles, guides and tips to make your life as an expatriate in Spain easier."
  },
  'blog.category_all': {
    es: "Todos",
    en: "All"
  },
  'blog.category_procedures': {
    es: "Trámites",
    en: "Procedures"
  },
  'blog.category_housing': {
    es: "Vivienda",
    en: "Housing"
  },
  'blog.category_taxes': {
    es: "Impuestos",
    en: "Taxes"
  },
  'blog.category_culture': {
    es: "Cultura",
    en: "Culture"
  },
  'blog.category_education': {
    es: "Educación",
    en: "Education"
  },
  'blog.recent_articles': {
    es: "Artículos recientes",
    en: "Recent articles"
  },
  'blog.gallery_title': {
    es: "Galería de experiencias",
    en: "Experiences gallery"
  },
  'blog.gallery_description': {
    es: "Imágenes de nuestros eventos, talleres y actividades con la comunidad de expatriados.",
    en: "Images of our events, workshops and activities with the expatriate community."
  },
  'blog.gallery_subtitle': {
    es: "Momentos compartidos",
    en: "Shared moments"
  },
  'blog.gallery_image1_alt': {
    es: "Taller sobre adaptación cultural en España",
    en: "Workshop on cultural adaptation in Spain"
  },
  'blog.gallery_image2_alt': {
    es: "Networking para expatriados en Madrid",
    en: "Networking for expatriates in Madrid"
  },
  'blog.gallery_image3_alt': {
    es: "Sesión informativa sobre trámites legales",
    en: "Information session on legal procedures"
  },
  'blog.gallery_image4_alt': {
    es: "Evento social para nuevos expatriados",
    en: "Social event for new expatriates"
  },
  'blog.newsletter_title': {
    es: "Suscríbete a nuestro boletín",
    en: "Subscribe to our newsletter"
  },
  'blog.newsletter_description': {
    es: "Recibe artículos útiles, noticias y consejos para expatriados directamente en tu correo.",
    en: "Receive useful articles, news and tips for expatriates directly in your email."
  },
  'blog.newsletter_placeholder': {
    es: "Tu correo electrónico",
    en: "Your email"
  },
  'blog.newsletter_button': {
    es: "Suscribirse",
    en: "Subscribe"
  },
  'blog.newsletter_privacy': {
    es: "No compartiremos tu información. Puedes darte de baja en cualquier momento.",
    en: "We won't share your information. You can unsubscribe at any time."
  },
  
  // Página de Equipo
  'team.title': {
    es: "Nuestro Equipo",
    en: "Our Team"
  },
  'team.description': {
    es: "Conoce a los profesionales detrás de SOS Expats, dedicados a facilitar la adaptación de expatriados en España.",
    en: "Meet the professionals behind SOS Expats, dedicated to facilitating the adaptation of expatriates in Spain."
  },
  'team.leadership_title': {
    es: "Equipo directivo",
    en: "Leadership team"
  },
  'team.position_ceo': {
    es: "Fundadora y Directora Ejecutiva",
    en: "Founder and CEO"
  },
  'team.position_legal': {
    es: "Director de Servicios Legales",
    en: "Legal Services Director"
  },
  'team.position_community': {
    es: "Coordinadora de Comunidad",
    en: "Community Coordinator"
  },
  'team.position_housing': {
    es: "Especialista en Vivienda",
    en: "Housing Specialist"
  },
  'team.member1_description': {
    es: "Con más de 15 años de experiencia trabajando con expatriados, Laura fundó SOS Expats para crear una red de apoyo integral.",
    en: "With over 15 years of experience working with expatriates, Laura founded SOS Expats to create a comprehensive support network."
  },
  'team.member2_description': {
    es: "Abogado especializado en derecho migratorio e internacional, ayuda a los expatriados a navegar los complejos trámites legales en España.",
    en: "A lawyer specialized in immigration and international law, he helps expatriates navigate complex legal procedures in Spain."
  },
  'team.member3_description': {
    es: "Sofia se encarga de conectar a los expatriados entre sí y con profesionales locales, organizando eventos y actividades comunitarias.",
    en: "Sofia is responsible for connecting expatriates with each other and with local professionals, organizing events and community activities."
  },
  'team.member4_description': {
    es: "Miguel ayuda a los recién llegados a encontrar el hogar perfecto en España, gestionando todos los aspectos relacionados con la vivienda.",
    en: "Miguel helps newcomers find the perfect home in Spain, managing all aspects related to housing."
  },
  'team.values_title': {
    es: "Nuestros Valores",
    en: "Our Values"
  },
  'team.value1_title': {
    es: "Empatía Cultural",
    en: "Cultural Empathy"
  },
  'team.value1_description': {
    es: "Entendemos los desafíos de adaptarse a una nueva cultura y trabajamos para facilitar este proceso con sensibilidad y comprensión.",
    en: "We understand the challenges of adapting to a new culture and work to facilitate this process with sensitivity and understanding."
  },
  'team.value2_title': {
    es: "Profesionalismo",
    en: "Professionalism"
  },
  'team.value2_description': {
    es: "Ofrecemos servicios de alta calidad con estándares profesionales rigurosos, garantizando soluciones eficientes y confiables.",
    en: "We offer high-quality services with rigorous professional standards, ensuring efficient and reliable solutions."
  },
  'team.value3_title': {
    es: "Comunidad",
    en: "Community"
  },
  'team.value3_description': {
    es: "Creemos en el poder de las conexiones humanas y fomentamos una comunidad donde los expatriados se sientan parte de un grupo de apoyo.",
    en: "We believe in the power of human connections and foster a community where expatriates feel part of a support group."
  },
  'team.value4_title': {
    es: "Innovación",
    en: "Innovation"
  },
  'team.value4_description': {
    es: "Buscamos constantemente nuevas formas de mejorar nuestros servicios y adaptarnos a las necesidades cambiantes de los expatriados.",
    en: "We constantly seek new ways to improve our services and adapt to the changing needs of expatriates."
  },
  'team.gallery_title': {
    es: "Nuestro equipo en acción",
    en: "Our team in action"
  },
  'team.gallery_subtitle': {
    es: "Trabajando juntos para servir mejor",
    en: "Working together to better serve"
  },
  'team.gallery_image1_alt': {
    es: "Reunión del equipo directivo de SOS Expats",
    en: "SOS Expats leadership team meeting"
  },
  'team.gallery_image2_alt': {
    es: "Nuestro equipo en un evento para expatriados",
    en: "Our team at an event for expatriates"
  },
  'team.gallery_image3_alt': {
    es: "Sesión de formación para nuevos miembros del equipo",
    en: "Training session for new team members"
  },
  'team.gallery_image4_alt': {
    es: "Colaboración del equipo en un proyecto especial",
    en: "Team collaboration on a special project"
  },
  'team.join_title': {
    es: "¿Quieres unirte a nuestro equipo?",
    en: "Want to join our team?"
  },
  'team.join_description': {
    es: "Estamos siempre buscando profesionales apasionados por ayudar a los expatriados y que compartan nuestros valores.",
    en: "We are always looking for professionals who are passionate about helping expatriates and who share our values."
  },
  'team.join_button': {
    es: "Ver Oportunidades",
    en: "See Opportunities"
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
