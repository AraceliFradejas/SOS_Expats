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
  nav_gallery: {
    es: "Galería",
    en: "Gallery"
  },
  nav_register_professional: {
    es: "Únete como Profesional",
    en: "Join as Professional"
  },
  nav_request_service: {
    es: "Solicitar Servicio",
    en: "Request Service"
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
  home_cta_forms_title: {
    es: "¿Listo para comenzar?",
    en: "Ready to get started?"
  },
  home_cta_forms_subtitle: {
    es: "Únete a nuestra plataforma o solicita el servicio que necesitas hoy mismo",
    en: "Join our platform or request the service you need today"
  },
  home_cta_register_professional: {
    es: "Registrarme como Profesional",
    en: "Register as Professional"
  },
  home_cta_request_service: {
    es: "Solicitar un Servicio",
    en: "Request a Service"
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
  
  // Página de Recursos
  'resources.title': {
    es: "Recursos para Expatriados",
    en: "Expatriate Resources"
  },
  'resources.description': {
    es: "Aquí encontrarás guías, documentos y herramientas útiles para facilitar tu adaptación y vida diaria en España.",
    en: "Here you'll find guides, documents and useful tools to facilitate your adaptation and daily life in Spain."
  },
  'resources.all_categories': {
    es: "Todas las categorías",
    en: "All categories"
  },
  'resources.read_more': {
    es: "Leer más",
    en: "Read more"
  },
  'resources.legal_category': {
    es: "Recursos Legales",
    en: "Legal Resources"
  },
  'resources.housing_category': {
    es: "Vivienda",
    en: "Housing"
  },
  'resources.education_category': {
    es: "Educación",
    en: "Education"
  },
  'resources.culture_category': {
    es: "Cultura y Adaptación",
    en: "Culture & Adaptation"
  },
  'resources.legal_resource1_title': {
    es: "Guía completa sobre el NIE",
    en: "Complete guide to NIE"
  },
  'resources.legal_resource1_description': {
    es: "Todo lo que necesitas saber sobre el Número de Identidad de Extranjero: requisitos, procesos y consejos.",
    en: "Everything you need to know about the Foreigner Identification Number: requirements, processes and tips."
  },
  'resources.legal_resource2_title': {
    es: "Trámites de residencia",
    en: "Residence procedures"
  },
  'resources.legal_resource2_description': {
    es: "Información detallada sobre los diferentes tipos de permisos de residencia y cómo solicitarlos.",
    en: "Detailed information about the different types of residence permits and how to apply for them."
  },
  'resources.legal_resource3_title': {
    es: "Fiscalidad para expatriados",
    en: "Taxation for expatriates"
  },
  'resources.legal_resource3_description': {
    es: "Guía sobre impuestos, obligaciones fiscales y convenios de doble imposición para extranjeros en España.",
    en: "Guide on taxes, tax obligations and double taxation agreements for foreigners in Spain."
  },
  'resources.housing_resource1_title': {
    es: "Cómo alquilar una vivienda en España",
    en: "How to rent a home in Spain"
  },
  'resources.housing_resource1_description': {
    es: "Guía paso a paso para encontrar y alquilar una vivienda, incluyendo aspectos legales y consejos prácticos.",
    en: "Step-by-step guide to finding and renting a home, including legal aspects and practical advice."
  },
  'resources.housing_resource2_title': {
    es: "Compra de propiedad para extranjeros",
    en: "Property purchase for foreigners"
  },
  'resources.housing_resource2_description': {
    es: "Todo lo que debes saber si estás considerando comprar una propiedad en España siendo extranjero.",
    en: "Everything you should know if you're considering buying a property in Spain as a foreigner."
  },
  'resources.housing_resource3_title': {
    es: "Glosario de términos inmobiliarios",
    en: "Real estate glossary"
  },
  'resources.housing_resource3_description': {
    es: "Diccionario español-inglés de los términos más comunes que encontrarás en el mercado inmobiliario español.",
    en: "Spanish-English dictionary of the most common terms you'll find in the Spanish real estate market."
  },
  'resources.education_resource1_title': {
    es: "Sistema educativo español",
    en: "Spanish educational system"
  },
  'resources.education_resource1_description': {
    es: "Explicación detallada sobre cómo funciona la educación en España, desde infantil hasta la universidad.",
    en: "Detailed explanation of how education works in Spain, from kindergarten to university."
  },
  'resources.education_resource2_title': {
    es: "Escuelas internacionales y bilingües",
    en: "International and bilingual schools"
  },
  'resources.education_resource2_description': {
    es: "Directorio de centros educativos internacionales y bilingües en las principales ciudades españolas.",
    en: "Directory of international and bilingual educational centers in the main Spanish cities."
  },
  'resources.education_resource3_title': {
    es: "Cursos de español para extranjeros",
    en: "Spanish courses for foreigners"
  },
  'resources.education_resource3_description': {
    es: "Opciones para aprender español, desde academias y universidades hasta intercambios lingüísticos.",
    en: "Options for learning Spanish, from academies and universities to language exchanges."
  },
  'resources.culture_resource1_title': {
    es: "Choque cultural en España",
    en: "Culture shock in Spain"
  },
  'resources.culture_resource1_description': {
    es: "Consejos para gestionar el choque cultural y adaptarte más fácilmente a la vida en España.",
    en: "Tips for managing culture shock and adapting more easily to life in Spain."
  },
  'resources.culture_resource2_title': {
    es: "Costumbres españolas explicadas",
    en: "Spanish customs explained"
  },
  'resources.culture_resource2_description': {
    es: "Guía sobre horarios, comidas, celebraciones y otras particularidades de la cultura española.",
    en: "Guide on schedules, meals, celebrations and other peculiarities of Spanish culture."
  },
  'resources.culture_resource3_title': {
    es: "Comunidades de expatriados",
    en: "Expatriate communities"
  },
  'resources.culture_resource3_description': {
    es: "Información sobre grupos, asociaciones y eventos donde conocer a otros expatriados en España.",
    en: "Information about groups, associations and events where you can meet other expatriates in Spain."
  },
  'resources.downloads_title': {
    es: "Guías descargables",
    en: "Downloadable guides"
  },
  'resources.download1_title': {
    es: "Checklist de mudanza",
    en: "Moving checklist"
  },
  'resources.download1_description': {
    es: "Lista completa de tareas para preparar tu mudanza a España de forma organizada.",
    en: "Complete task list to prepare your move to Spain in an organized way."
  },
  'resources.download2_title': {
    es: "Guía de barrios",
    en: "Neighborhood guide"
  },
  'resources.download2_description': {
    es: "Información detallada sobre los mejores barrios para expatriados en las principales ciudades.",
    en: "Detailed information about the best neighborhoods for expatriates in major cities."
  },
  'resources.download3_title': {
    es: "Plantillas de CV españolas",
    en: "Spanish CV templates"
  },
  'resources.download3_description': {
    es: "Modelos de currículum adaptados al mercado laboral español y consejos para buscar empleo.",
    en: "Resume templates adapted to the Spanish job market and tips for job searching."
  },
  'resources.download4_title': {
    es: "Documentos esenciales",
    en: "Essential documents"
  },
  'resources.download4_description': {
    es: "Listado de documentos importantes que debes tener preparados al mudarte a España.",
    en: "List of important documents you should have ready when moving to Spain."
  },
  'resources.download_button': {
    es: "Descargar PDF",
    en: "Download PDF"
  },
  'resources.faq_title': {
    es: "Preguntas frecuentes",
    en: "Frequently asked questions"
  },
  'resources.faq1_question': {
    es: "¿Qué documentos necesito para trabajar legalmente en España?",
    en: "What documents do I need to work legally in Spain?"
  },
  'resources.faq1_answer': {
    es: "Para trabajar legalmente en España como extranjero, necesitarás un NIE, un permiso de residencia y trabajo, y estar dado de alta en la Seguridad Social. Los requisitos específicos varían según tu nacionalidad y situación personal.",
    en: "To work legally in Spain as a foreigner, you'll need a NIE, a residence and work permit, and to be registered with Social Security. The specific requirements vary according to your nationality and personal situation."
  },
  'resources.faq2_question': {
    es: "¿Cómo funciona el sistema sanitario para expatriados?",
    en: "How does the healthcare system work for expatriates?"
  },
  'resources.faq2_answer': {
    es: "Los expatriados con residencia legal tienen acceso al sistema sanitario público español, que es considerado uno de los mejores del mundo. Si trabajas en España, contribuirás a la Seguridad Social, lo que incluye la cobertura sanitaria.",
    en: "Expatriates with legal residence have access to the Spanish public healthcare system, which is considered one of the best in the world. If you work in Spain, you'll contribute to Social Security, which includes healthcare coverage."
  },
  'resources.faq3_question': {
    es: "¿Cuánto tiempo puedo permanecer en España como turista?",
    en: "How long can I stay in Spain as a tourist?"
  },
  'resources.faq3_answer': {
    es: "Los ciudadanos de la UE pueden residir en España hasta 3 meses sin registro formal. Los no comunitarios generalmente pueden permanecer 90 días en un período de 180 días con visa Schengen o exención de visado, dependiendo de su nacionalidad.",
    en: "EU citizens can reside in Spain for up to 3 months without formal registration. Non-EU citizens can generally stay for 90 days in a 180-day period with a Schengen visa or visa exemption, depending on their nationality."
  },
  'resources.faq4_question': {
    es: "¿Es difícil abrir una cuenta bancaria siendo extranjero?",
    en: "Is it difficult to open a bank account as a foreigner?"
  },
  'resources.faq4_answer': {
    es: "No es especialmente difícil, pero necesitarás tu pasaporte o documento de identidad, NIE y prueba de residencia. Algunos bancos ofrecen cuentas específicas para no residentes. Recomendamos investigar diferentes entidades para encontrar las mejores condiciones.",
    en: "It's not especially difficult, but you'll need your passport or ID, NIE and proof of residence. Some banks offer specific accounts for non-residents. We recommend researching different institutions to find the best conditions."
  },
  'resources.cta_title': {
    es: "¿Necesitas ayuda personalizada?",
    en: "Need personalized help?"
  },
  'resources.cta_description': {
    es: "Nuestro equipo de asesores está disponible para resolver tus dudas específicas y ayudarte en tu proceso de adaptación.",
    en: "Our team of advisors is available to resolve your specific doubts and help you in your adaptation process."
  },
  'resources.cta_button': {
    es: "Contáctanos",
    en: "Contact Us"
  },
  
  // Formulario de Inscripción de Profesionales
  'form.professional.title': {
    es: "Inscripción de Profesionales",
    en: "Professional Registration"
  },
  'form.professional.image_placeholder': {
    es: "Imagen representativa de profesionales",
    en: "Representative image of professionals"
  },
  'form.professional.step1_title': {
    es: "Información Básica",
    en: "Basic Information"
  },
  'form.professional.step2_title': {
    es: "Información Profesional",
    en: "Professional Information"
  },
  'form.professional.step3_title': {
    es: "Información Comercial",
    en: "Commercial Information"
  },
  'form.professional.step4_title': {
    es: "Documentación",
    en: "Documentation"
  },
  'form.professional.step5_title': {
    es: "Plan de Suscripción",
    en: "Subscription Plan"
  },
  'form.professional.full_name': {
    es: "Nombre completo",
    en: "Full name"
  },
  'form.professional.professional_email': {
    es: "Email profesional",
    en: "Professional email"
  },
  'form.professional.phone': {
    es: "Teléfono de contacto",
    en: "Contact phone"
  },
  'form.professional.dni_nie': {
    es: "DNI/NIE",
    en: "DNI/NIE"
  },
  'form.professional.specialization_area': {
    es: "Área de especialización",
    en: "Specialization area"
  },
  'form.professional.select_area': {
    es: "Selecciona un área",
    en: "Select an area"
  },
  'form.professional.legal_advisory': {
    es: "Asesoría Legal",
    en: "Legal Advisory"
  },
  'form.professional.real_estate': {
    es: "Inmobiliaria",
    en: "Real Estate"
  },
  'form.professional.administrative': {
    es: "Gestiones Administrativas",
    en: "Administrative Services"
  },
  'form.professional.tax_accounting': {
    es: "Fiscal y Contable",
    en: "Tax & Accounting"
  },
  'form.professional.education': {
    es: "Educación",
    en: "Education"
  },
  'form.professional.health': {
    es: "Salud",
    en: "Health"
  },
  'form.professional.translation': {
    es: "Traducción",
    en: "Translation"
  },
  'form.professional.others': {
    es: "Otros",
    en: "Others"
  },
  'form.professional.years_experience': {
    es: "Años de experiencia",
    en: "Years of experience"
  },
  'form.professional.select_experience': {
    es: "Selecciona experiencia",
    en: "Select experience"
  },
  'form.professional.years': {
    es: "años",
    en: "years"
  },
  'form.professional.more_than_15': {
    es: "Más de 15 años",
    en: "More than 15 years"
  },
  'form.professional.professional_number': {
    es: "Número de colegiación",
    en: "Professional registration number"
  },
  'form.professional.number_placeholder': {
    es: "Ej: 12345",
    en: "Ex: 12345"
  },
  'form.professional.professional_college': {
    es: "Colegio profesional",
    en: "Professional college"
  },
  'form.professional.college_placeholder': {
    es: "Ej: Colegio de Abogados de Madrid",
    en: "Ex: Madrid Bar Association"
  },
  'form.professional.languages': {
    es: "Idiomas que domina",
    en: "Languages mastered"
  },
  'form.professional.lang_spanish': {
    es: "Español",
    en: "Spanish"
  },
  'form.professional.lang_english': {
    es: "Inglés",
    en: "English"
  },
  'form.professional.lang_french': {
    es: "Francés",
    en: "French"
  },
  'form.professional.lang_german': {
    es: "Alemán",
    en: "German"
  },
  'form.professional.lang_italian': {
    es: "Italiano",
    en: "Italian"
  },
  'form.professional.lang_portuguese': {
    es: "Portugués",
    en: "Portuguese"
  },
  'form.professional.lang_chinese': {
    es: "Chino",
    en: "Chinese"
  },
  'form.professional.lang_arabic': {
    es: "Árabe",
    en: "Arabic"
  },
  'form.professional.service_description': {
    es: "Descripción de servicios",
    en: "Service description"
  },
  'form.professional.service_description_placeholder': {
    es: "Describe detalladamente los servicios que ofreces...",
    en: "Describe in detail the services you offer..."
  },
  'form.professional.characters': {
    es: "caracteres",
    en: "characters"
  },
  'form.professional.work_modality': {
    es: "Modalidad de trabajo",
    en: "Work modality"
  },
  'form.professional.select_modality': {
    es: "Selecciona modalidad",
    en: "Select modality"
  },
  'form.professional.in_person': {
    es: "Presencial",
    en: "In person"
  },
  'form.professional.online': {
    es: "Online",
    en: "Online"
  },
  'form.professional.both': {
    es: "Ambos",
    en: "Both"
  },
  'form.professional.hourly_rate': {
    es: "Tarifa orientativa por hora",
    en: "Indicative hourly rate"
  },
  'form.professional.select_rate': {
    es: "Selecciona tarifa",
    en: "Select rate"
  },
  'form.professional.by_project': {
    es: "Por proyecto",
    en: "By project"
  },
  'form.professional.coverage_area': {
    es: "Zona de cobertura geográfica",
    en: "Geographic coverage area"
  },
  'form.professional.coverage_placeholder': {
    es: "Ej: Madrid, Barcelona, Valencia...",
    en: "Ex: Madrid, Barcelona, Valencia..."
  },
  'form.professional.professional_certifications': {
    es: "Certificaciones profesionales",
    en: "Professional certifications"
  },
  'form.professional.file_formats': {
    es: "Formatos aceptados: PDF, JPG, PNG",
    en: "Accepted formats: PDF, JPG, PNG"
  },
  'form.professional.liability_insurance': {
    es: "Seguro de responsabilidad civil",
    en: "Liability insurance"
  },
  'form.professional.pdf_only': {
    es: "Solo archivos PDF",
    en: "PDF files only"
  },
  'form.professional.professional_photo': {
    es: "Foto profesional",
    en: "Professional photo"
  },
  'form.professional.image_formats': {
    es: "Formatos: JPG, PNG",
    en: "Formats: JPG, PNG"
  },
  'form.professional.basic_plan': {
    es: "Plan Básico",
    en: "Basic Plan"
  },
  'form.professional.premium_plan': {
    es: "Plan Premium",
    en: "Premium Plan"
  },
  'form.professional.month': {
    es: "mes",
    en: "month"
  },
  'form.professional.basic_feature1': {
    es: "Perfil en directorio",
    en: "Directory profile"
  },
  'form.professional.basic_feature2': {
    es: "Contacto directo de clientes",
    en: "Direct client contact"
  },
  'form.professional.basic_feature3': {
    es: "Soporte básico",
    en: "Basic support"
  },
  'form.professional.premium_feature1': {
    es: "Perfil destacado",
    en: "Featured profile"
  },
  'form.professional.premium_feature2': {
    es: "Mayor visibilidad",
    en: "Increased visibility"
  },
  'form.professional.premium_feature3': {
    es: "Estadísticas avanzadas",
    en: "Advanced statistics"
  },
  'form.professional.premium_feature4': {
    es: "Soporte prioritario",
    en: "Priority support"
  },
  'form.professional.payment_method': {
    es: "Método de pago",
    en: "Payment method"
  },
  'form.professional.select_payment': {
    es: "Selecciona método",
    en: "Select method"
  },
  'form.professional.credit_card': {
    es: "Tarjeta de crédito",
    en: "Credit card"
  },
  'form.professional.bank_transfer': {
    es: "Transferencia bancaria",
    en: "Bank transfer"
  },
  'form.professional.accept_terms': {
    es: "Acepto los",
    en: "I accept the"
  },
  'form.professional.terms_link': {
    es: "términos y condiciones",
    en: "terms and conditions"
  },
  'form.professional.accept_privacy': {
    es: "Acepto la",
    en: "I accept the"
  },
  'form.professional.privacy_link': {
    es: "política de privacidad",
    en: "privacy policy"
  },
  'form.professional.accept_quality': {
    es: "Acepto cumplir con la política de calidad del servicio",
    en: "I agree to comply with the service quality policy"
  },
  'form.professional.previous': {
    es: "Anterior",
    en: "Previous"
  },
  'form.professional.next': {
    es: "Siguiente",
    en: "Next"
  },
  'form.professional.submit': {
    es: "Enviar Inscripción",
    en: "Submit Registration"
  },
  'form.professional.success_message': {
    es: "¡Inscripción enviada correctamente! Te contactaremos pronto.",
    en: "Registration submitted successfully! We will contact you soon."
  },
  'form.professional.success_title': {
    es: "¡Registro Exitoso!",
    en: "Successful Registration!"
  },
  'form.professional.success_follow_up': {
    es: "Recibirás un email de confirmación con los próximos pasos en las próximas 24 horas.",
    en: "You will receive a confirmation email with next steps within 24 hours."
  },
  
  // Formulario de Solicitud de Servicio
  'form.service.title': {
    es: "Solicitar Servicio",
    en: "Request Service"
  },
  'form.service.image_placeholder': {
    es: "Imagen representativa de expats",
    en: "Representative image of expats"
  },
  'form.service.subtitle': {
    es: "Completa este formulario y te conectaremos con el profesional adecuado para tus necesidades",
    en: "Complete this form and we'll connect you with the right professional for your needs"
  },
  'form.service.personal_info': {
    es: "Información Personal",
    en: "Personal Information"
  },
  'form.service.full_name': {
    es: "Nombre completo",
    en: "Full name"
  },
  'form.service.email': {
    es: "Correo electrónico",
    en: "Email"
  },
  'form.service.phone': {
    es: "Teléfono",
    en: "Phone"
  },
  'form.service.nationality': {
    es: "Nacionalidad",
    en: "Nationality"
  },
  'form.service.nationality_placeholder': {
    es: "Ej: Francesa, Alemana, Británica...",
    en: "Ex: French, German, British..."
  },
  'form.service.service_need': {
    es: "Información sobre la Necesidad",
    en: "Service Need Information"
  },
  'form.service.service_type': {
    es: "Tipo de servicio requerido",
    en: "Required service type"
  },
  'form.service.select_service': {
    es: "Selecciona un servicio",
    en: "Select a service"
  },
  'form.service.legal_advisory': {
    es: "Asesoría Legal",
    en: "Legal Advisory"
  },
  'form.service.real_estate': {
    es: "Inmobiliaria",
    en: "Real Estate"
  },
  'form.service.administrative': {
    es: "Gestiones Administrativas",
    en: "Administrative Services"
  },
  'form.service.tax_accounting': {
    es: "Fiscal y Contable",
    en: "Tax & Accounting"
  },
  'form.service.education': {
    es: "Educación",
    en: "Education"
  },
  'form.service.health': {
    es: "Salud",
    en: "Health"
  },
  'form.service.translation': {
    es: "Traducción",
    en: "Translation"
  },
  'form.service.others': {
    es: "Otros",
    en: "Others"
  },
  'form.service.detailed_description': {
    es: "Descripción detallada del servicio",
    en: "Detailed service description"
  },
  'form.service.description_placeholder': {
    es: "Explica específicamente qué necesitas y cualquier detalle relevante...",
    en: "Explain specifically what you need and any relevant details..."
  },
  'form.service.characters': {
    es: "caracteres",
    en: "characters"
  },
  'form.service.urgency': {
    es: "Urgencia",
    en: "Urgency"
  },
  'form.service.select_urgency': {
    es: "Selecciona urgencia",
    en: "Select urgency"
  },
  'form.service.immediate': {
    es: "Inmediata",
    en: "Immediate"
  },
  'form.service.this_week': {
    es: "Esta semana",
    en: "This week"
  },
  'form.service.this_month': {
    es: "Este mes",
    en: "This month"
  },
  'form.service.no_rush': {
    es: "No hay prisa",
    en: "No rush"
  },
  'form.service.budget_range': {
    es: "Presupuesto orientativo",
    en: "Indicative budget"
  },
  'form.service.select_budget': {
    es: "Selecciona rango",
    en: "Select range"
  },
  'form.service.to_consult': {
    es: "A consultar",
    en: "To consult"
  },
  'form.service.context_info': {
    es: "Información de Contexto",
    en: "Context Information"
  },
  'form.service.current_situation': {
    es: "Situación actual",
    en: "Current situation"
  },
  'form.service.select_situation': {
    es: "Selecciona situación",
    en: "Select situation"
  },
  'form.service.student': {
    es: "Estudiante",
    en: "Student"
  },
  'form.service.professional': {
    es: "Profesional",
    en: "Professional"
  },
  'form.service.job_seeker': {
    es: "Buscando trabajo",
    en: "Job seeker"
  },
  'form.service.retired': {
    es: "Jubilado",
    en: "Retired"
  },
  'form.service.entrepreneur': {
    es: "Emprendedor",
    en: "Entrepreneur"
  },
  'form.service.other': {
    es: "Otro",
    en: "Other"
  },
  'form.service.time_in_spain': {
    es: "Tiempo en España",
    en: "Time in Spain"
  },
  'form.service.select_time': {
    es: "Selecciona tiempo",
    en: "Select time"
  },
  'form.service.just_arrived': {
    es: "Recién llegado",
    en: "Just arrived"
  },
  'form.service.less_than_year': {
    es: "Menos de 1 año",
    en: "Less than 1 year"
  },
  'form.service.one_to_three_years': {
    es: "1-3 años",
    en: "1-3 years"
  },
  'form.service.more_than_three_years': {
    es: "Más de 3 años",
    en: "More than 3 years"
  },
  'form.service.service_city': {
    es: "Ciudad donde necesita el servicio",
    en: "City where service is needed"
  },
  'form.service.city_placeholder': {
    es: "Ej: Madrid, Barcelona, Valencia...",
    en: "Ex: Madrid, Barcelona, Valencia..."
  },
  'form.service.language_preference': {
    es: "Preferencia de idioma para la atención",
    en: "Language preference for service"
  },
  'form.service.select_language': {
    es: "Selecciona idioma",
    en: "Select language"
  },
  'form.service.spanish': {
    es: "Español",
    en: "Spanish"
  },
  'form.service.english': {
    es: "Inglés",
    en: "English"
  },
  'form.service.french': {
    es: "Francés",
    en: "French"
  },
  'form.service.german': {
    es: "Alemán",
    en: "German"
  },
  'form.service.italian': {
    es: "Italiano",
    en: "Italian"
  },
  'form.service.portuguese': {
    es: "Portugués",
    en: "Portuguese"
  },
  'form.service.other_language': {
    es: "Otro idioma",
    en: "Other language"
  },
  'form.service.contact_preferences': {
    es: "Preferencias de Contacto",
    en: "Contact Preferences"
  },
  'form.service.preferred_schedule': {
    es: "Horario preferido para contacto",
    en: "Preferred contact schedule"
  },
  'form.service.select_schedule': {
    es: "Selecciona horario",
    en: "Select schedule"
  },
  'form.service.morning': {
    es: "Mañana (9:00-14:00)",
    en: "Morning (9:00-14:00)"
  },
  'form.service.afternoon': {
    es: "Tarde (14:00-18:00)",
    en: "Afternoon (14:00-18:00)"
  },
  'form.service.evening': {
    es: "Noche (18:00-21:00)",
    en: "Evening (18:00-21:00)"
  },
  'form.service.weekend': {
    es: "Fin de semana",
    en: "Weekend"
  },
  'form.service.flexible': {
    es: "Flexible",
    en: "Flexible"
  },
  'form.service.preferred_contact_method': {
    es: "Método de contacto preferido",
    en: "Preferred contact method"
  },
  'form.service.select_contact_method': {
    es: "Selecciona método",
    en: "Select method"
  },
  'form.service.email_contact': {
    es: "Email",
    en: "Email"
  },
  'form.service.phone_contact': {
    es: "Teléfono",
    en: "Phone"
  },
  'form.service.whatsapp_contact': {
    es: "WhatsApp",
    en: "WhatsApp"
  },
  'form.service.in_person_contact': {
    es: "Presencial",
    en: "In person"
  },
  'form.service.consents': {
    es: "Consentimientos",
    en: "Consents"
  },
  'form.service.data_authorization': {
    es: "Autorizo a compartir mis datos con profesionales del directorio para que puedan contactarme",
    en: "I authorize sharing my data with directory professionals so they can contact me"
  },
  'form.service.newsletter_subscription': {
    es: "Deseo suscribirme al boletín de noticias y consejos para expatriados",
    en: "I want to subscribe to the newsletter and tips for expatriates"
  },
  'form.service.privacy_policy_acceptance': {
    es: "Acepto la",
    en: "I accept the"
  },
  'form.service.privacy_policy_link': {
    es: "política de privacidad",
    en: "privacy policy"
  },
  'form.service.submit_request': {
    es: "Enviar Solicitud",
    en: "Submit Request"
  },
  'form.service.success_message': {
    es: "¡Solicitud enviada correctamente! Te contactaremos pronto con profesionales adecuados.",
    en: "Request submitted successfully! We will contact you soon with suitable professionals."
  },
  'form.service.success_title': {
    es: "¡Solicitud Enviada!",
    en: "Request Submitted!"
  },
  'form.service.success_follow_up': {
    es: "Revisaremos tu solicitud y te enviaremos propuestas de profesionales en menos de 48 horas.",
    en: "We will review your request and send you professional proposals within 48 hours."
  },
  'form.success.continue': {
    es: "Continuar",
    en: "Continue"
  },
  
  // Página de Galería
  'gallery.title': {
    es: "Galería de Imágenes",
    en: "Image Gallery"
  },
  'gallery.description': {
    es: "Explora nuestra colección completa de imágenes de todas las secciones de SOS Expats.",
    en: "Explore our complete collection of images from all sections of SOS Expats."
  },
  'gallery.hero_section': {
    es: "Imágenes de Portada",
    en: "Hero Images"
  },
  'gallery.hero_subtitle': {
    es: "Imágenes de nuestra página principal",
    en: "Images from our main page"
  },
  'gallery.hero_image1_alt': {
    es: "Expatriado africano en España",
    en: "African expatriate in Spain"
  },
  'gallery.hero_image2_alt': {
    es: "Expatriado americano en España",
    en: "American expatriate in Spain"
  },
  'gallery.hero_image3_alt': {
    es: "Expatriado británico en España",
    en: "British expatriate in Spain"
  },
  'gallery.hero_image4_alt': {
    es: "Expatriado chino en España",
    en: "Chinese expatriate in Spain"
  },
  'gallery.hero_image5_alt': {
    es: "Expatriado francés en España",
    en: "French expatriate in Spain"
  },
  'gallery.expats_section': {
    es: "Sección de Expatriados",
    en: "Expatriates Section"
  },
  'gallery.expats_subtitle': {
    es: "Imágenes de nuestra sección de expatriados",
    en: "Images from our expatriates section"
  },
  'gallery.expats_image1_alt': {
    es: "Comunidad de expatriados en España",
    en: "Expatriate community in Spain"
  },
  'gallery.professionals_section': {
    es: "Sección de Profesionales",
    en: "Professionals Section"
  },
  'gallery.professionals_subtitle': {
    es: "Imágenes de nuestra sección de profesionales",
    en: "Images from our professionals section"
  },
  'gallery.professionals_image1_alt': {
    es: "Red de profesionales para expatriados",
    en: "Network of professionals for expatriates"
  },
  'gallery.services_section': {
    es: "Sección de Servicios",
    en: "Services Section"
  },
  'gallery.services_subtitle': {
    es: "Imágenes de nuestros servicios",
    en: "Images of our services"
  },
  'gallery.services_image1_alt': {
    es: "Servicios para expatriados en España",
    en: "Services for expatriates in Spain"
  },
  'gallery.testimonials_section': {
    es: "Sección de Testimonios",
    en: "Testimonials Section"
  },
  'gallery.testimonials_subtitle': {
    es: "Imágenes de nuestros testimonios",
    en: "Images of our testimonials"
  },
  'gallery.testimonials_image1_alt': {
    es: "Testimonios de clientes expatriados",
    en: "Testimonials from expatriate clients"
  },
  'gallery.blog_section': {
    es: "Sección de Blog",
    en: "Blog Section"
  },
  'gallery.blog_subtitle': {
    es: "Imágenes de nuestro blog",
    en: "Images from our blog"
  },
  'gallery.blog_image1_alt': {
    es: "Artículos del blog para expatriados",
    en: "Blog articles for expatriates"
  },
  'gallery.team_section': {
    es: "Sección de Equipo",
    en: "Team Section"
  },
  'gallery.team_subtitle': {
    es: "Imágenes de nuestro equipo",
    en: "Images of our team"
  },
  'gallery.team_image1_alt': {
    es: "Equipo profesional de SOS Expats",
    en: "SOS Expats professional team"
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
