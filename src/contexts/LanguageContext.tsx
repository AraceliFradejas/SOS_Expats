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
    es: "Profesionales Expat",
    en: "Expat Professionals"
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
    es: "NOTA MUY IMPORTANTE",
    en: "IMPORTANT NOTE"
  },
  footer_important_notice_text: {
    es: "Esta página es un ejercicio realizado por Araceli Fradejas Muñoz como parte de la entrega del Trabajo Final de la Asignatura de Marketing Analytics del Máster en Marketing Digital y Analytics + Máster en IA Empresarial de la escuela ENEB.",
    en: "This page is an exercise created by Araceli Fradejas Muñoz as part of the final project for the Marketing Analytics subject of the Master in Digital Marketing and Analytics + Master in Business AI at ENEB School."
  },
  footer_copyright: {
    es: "© {year} Araceli Fradejas Muñoz. Todos los derechos reservados.",
    en: "© {year} Araceli Fradejas Muñoz. All rights reserved."
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
  professionals_dashboard: {
    es: "Panel de gestión",
    en: "Management dashboard"
  },
  professionals_register_now: {
    es: "Regístrate ahora",
    en: "Register now"
  },
  professionals_plans_pricing: {
    es: "Planes y Precios",
    en: "Plans and Pricing"
  },
  professionals_choose_plan: {
    es: "Elige el plan que mejor se adapte a tu negocio y necesidades profesionales.",
    en: "Choose the plan that best fits your business and professional needs."
  },
  professionals_basic_plan: {
    es: "Plan Básico gratuito",
    en: "Free Basic Plan"
  },
  professionals_premium_plan: {
    es: "Plan Premium con características avanzadas",
    en: "Premium Plan with advanced features"
  },
  professionals_billing: {
    es: "Facturación mensual o anual",
    en: "Monthly or annual billing"
  },
  professionals_view_plans: {
    es: "Ver planes",
    en: "View plans"
  },
  
  // FAQs traducciones que faltan
  'faq.category_general': {
    es: "General",
    en: "General"
  },
  'faq.category_legal': {
    es: "Legal",
    en: "Legal"
  },
  'faq.category_housing': {
    es: "Vivienda",
    en: "Housing"
  },
  'faq.category_health': {
    es: "Salud",
    en: "Health"
  },
  'faq.category_work': {
    es: "Trabajo",
    en: "Work"
  },
  'faq.title': {
    es: "Preguntas Frecuentes",
    en: "Frequently Asked Questions"
  },
  'faq.description': {
    es: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.",
    en: "Find answers to the most common questions about our services."
  },
  'faq.search_title': {
    es: "Buscar en preguntas frecuentes",
    en: "Search in FAQ"
  },
  'faq.search_placeholder': {
    es: "Escribe tu pregunta...",
    en: "Type your question..."
  },
  'faq.not_found_title': {
    es: "No se encontraron resultados",
    en: "No results found"
  },
  'faq.not_found_description': {
    es: "No encontramos preguntas que coincidan con tu búsqueda.",
    en: "We couldn't find any questions matching your search."
  },
  'faq.contact_button': {
    es: "Contactar soporte",
    en: "Contact support"
  },
  'faq.resources_title': {
    es: "Recursos adicionales",
    en: "Additional resources"
  },
  'faq.resource1_title': {
    es: "Guía para expatriados",
    en: "Expat guide"
  },
  'faq.resource1_description': {
    es: "Guía completa para vivir en España",
    en: "Complete guide to living in Spain"
  },
  'faq.resource2_title': {
    es: "Portal de profesionales",
    en: "Professional portal"
  },
  'faq.resource2_description': {
    es: "Información para profesionales",
    en: "Information for professionals"
  },
  'faq.resource3_title': {
    es: "Blog de noticias",
    en: "News blog"
  },
  'faq.resource3_description': {
    es: "Últimas noticias y consejos",
    en: "Latest news and tips"
  },
  'faq.resource_link': {
    es: "Ver más",
    en: "See more"
  },
  
  // Preguntas FAQ específicas
  'faq.general_q1': {
    es: "¿Qué es SOS Expats?",
    en: "What is SOS Expats?"
  },
  'faq.general_a1': {
    es: "SOS Expats es una plataforma que conecta expatriados con profesionales locales en España.",
    en: "SOS Expats is a platform that connects expatriates with local professionals in Spain."
  },
  'faq.general_q2': {
    es: "¿Cómo funciona la plataforma?",
    en: "How does the platform work?"
  },
  'faq.general_a2': {
    es: "Los expatriados pueden buscar servicios y los profesionales pueden ofrecer sus servicios.",
    en: "Expatriates can search for services and professionals can offer their services."
  },
  'faq.general_q3': {
    es: "¿Es gratuito usar SOS Expats?",
    en: "Is it free to use SOS Expats?"
  },
  'faq.general_a3': {
    es: "Para expatriados es completamente gratuito. Los profesionales tienen planes básicos gratuitos y premium.",
    en: "For expatriates it's completely free. Professionals have free basic plans and premium options."
  },
  
  'faq.legal_q1': {
    es: "¿Qué servicios legales ofrecen?",
    en: "What legal services do you offer?"
  },
  'faq.legal_a1': {
    es: "Conectamos con abogados especializados en trámites de extranjería, visados y residencia.",
    en: "We connect with lawyers specialized in immigration procedures, visas and residence."
  },
  'faq.legal_q2': {
    es: "¿Los profesionales están verificados?",
    en: "Are the professionals verified?"
  },
  'faq.legal_a2': {
    es: "Sí, todos nuestros profesionales pasan por un proceso de verificación de credenciales.",
    en: "Yes, all our professionals go through a credentials verification process."
  },
  'faq.legal_q3': {
    es: "¿Puedo obtener asesoría fiscal?",
    en: "Can I get tax advice?"
  },
  'faq.legal_a3': {
    es: "Tenemos asesores fiscales especializados en la situación de expatriados en España.",
    en: "We have tax advisors specialized in the situation of expatriates in Spain."
  },
  
  'faq.housing_q1': {
    es: "¿Ayudan a encontrar vivienda?",
    en: "Do you help find housing?"
  },
  'faq.housing_a1': {
    es: "Conectamos con agentes inmobiliarios que entienden las necesidades de los expatriados.",
    en: "We connect with real estate agents who understand the needs of expatriates."
  },
  'faq.housing_q2': {
    es: "¿Qué tipos de alojamiento ofrecen?",
    en: "What types of accommodation do you offer?"
  },
  'faq.housing_a2': {
    es: "Desde habitaciones compartidas hasta pisos completos, tanto alquiler como compra.",
    en: "From shared rooms to complete apartments, both rental and purchase."
  },
  'faq.housing_q3': {
    es: "¿Hay opciones temporales?",
    en: "Are there temporary options?"
  },
  'faq.housing_a3': {
    es: "Sí, tenemos profesionales que ofrecen alojamiento temporal y estancias cortas.",
    en: "Yes, we have professionals who offer temporary accommodation and short stays."
  },
  
  'faq.health_q1': {
    es: "¿Cómo accedo al sistema de salud?",
    en: "How do I access the health system?"
  },
  'faq.health_a1': {
    es: "Te conectamos con profesionales que te ayudan con el registro en la seguridad social y seguros médicos.",
    en: "We connect you with professionals who help you register for social security and medical insurance."
  },
  'faq.health_q2': {
    es: "¿Hay médicos que hablen mi idioma?",
    en: "Are there doctors who speak my language?"
  },
  'faq.health_a2': {
    es: "Nuestra red incluye profesionales médicos que hablan varios idiomas.",
    en: "Our network includes medical professionals who speak multiple languages."
  },
  'faq.health_q3': {
    es: "¿Qué pasa en emergencias?",
    en: "What happens in emergencies?"
  },
  'faq.health_a3': {
    es: "Proporcionamos información sobre servicios de emergencia y hospitales cercanos.",
    en: "We provide information about emergency services and nearby hospitals."
  },
  
  'faq.work_q1': {
    es: "¿Ayudan a encontrar trabajo?",
    en: "Do you help find work?"
  },
  'faq.work_a1': {
    es: "Conectamos con consultores de recursos humanos y coaches de carrera especializados en expatriados.",
    en: "We connect with HR consultants and career coaches specialized in expatriates."
  },
  'faq.work_q2': {
    es: "¿Qué necesito para trabajar en España?",
    en: "What do I need to work in Spain?"
  },
  'faq.work_a2': {
    es: "Depende de tu nacionalidad. Nuestros asesores legales te guiarán en los permisos necesarios.",
    en: "It depends on your nationality. Our legal advisors will guide you through the necessary permits."
  },
  'faq.work_q3': {
    es: "¿Puedo trabajar como autónomo?",
    en: "Can I work as self-employed?"
  },
  'faq.work_a3': {
    es: "Sí, tenemos asesores que te ayudan con todos los trámites para ser autónomo en España.",
    en: "Yes, we have advisors who help you with all the procedures to be self-employed in Spain."
  },
  
  // Formulario profesional
  'form.professional.subtitle': {
    es: "Formulario de registro para profesionales",
    en: "Professional registration form"
  },
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
    en: "Select rate"
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
