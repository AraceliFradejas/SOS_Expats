"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

interface TeamMember {
  name: string;
  position: {
    es: string;
    en: string;
  };
  bio: {
    es: string;
    en: string;
  };
  image: string;
}

export default function SobreNosotros() {
  const { language } = useLanguage();
  
  const teamMembers: TeamMember[] = [
    {
      name: "María Rodríguez",
      position: {
        es: "Fundadora y CEO",
        en: "Founder & CEO"
      },
      bio: {
        es: "María fundó SOS Expats tras 10 años viviendo como expatriada en diferentes países. Su experiencia personal la motivó a crear una plataforma que facilite la transición de los expatriados a España.",
        en: "María founded SOS Expats after 10 years living as an expatriate in different countries. Her personal experience motivated her to create a platform that facilitates the transition of expatriates to Spain."
      },
      image: "/assets/images/equipo/profesionales.png"
    },
    {
      name: "Carlos Martínez",
      position: {
        es: "Director de Tecnología",
        en: "CTO"
      },
      bio: {
        es: "Con una amplia experiencia en desarrollo web y aplicaciones móviles, Carlos lidera el departamento técnico asegurando que la plataforma sea intuitiva y funcional para todos los usuarios.",
        en: "With extensive experience in web development and mobile applications, Carlos leads the technical department ensuring that the platform is intuitive and functional for all users."
      },
      image: "/assets/images/equipo/profesionales.png"
    },
    {
      name: "Laura González",
      position: {
        es: "Directora de Operaciones",
        en: "COO"
      },
      bio: {
        es: "Laura supervisó la expansión de servicios de SOS Expats en todo el territorio español. Su enfoque en la calidad y la satisfacción del cliente ha sido fundamental para el crecimiento de la empresa.",
        en: "Laura oversaw the expansion of SOS Expats services throughout Spanish territory. Her focus on quality and customer satisfaction has been fundamental to the company's growth."
      },
      image: "/assets/images/equipo/profesionales.png"
    },
    {
      name: "Javier López",
      position: {
        es: "Director de Marketing",
        en: "Marketing Director"
      },
      bio: {
        es: "Especializado en marketing digital y estrategias de contenido, Javier ha contribuido significativamente a la visibilidad de SOS Expats y a la creación de una comunidad activa de expatriados.",
        en: "Specialized in digital marketing and content strategies, Javier has significantly contributed to the visibility of SOS Expats and the creation of an active community of expatriates."
      },
      image: "/assets/images/equipo/profesionales.png"
    }
  ];
  
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
        </h1>
        
        {/* Visión y misión */}
        <div className="mb-16">
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'es' ? 'Nuestra Visión' : 'Our Vision'}
            </h2>
            <p className="mb-8">
              {language === 'es' 
                ? 'Facilitar la adaptación de los expatriados en España a través de una red de profesionales de confianza y recursos de calidad.'
                : 'To facilitate the adaptation of expatriates in Spain through a network of trusted professionals and quality resources.'}
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            </h2>
            <p>
              {language === 'es' 
                ? 'Conectar a expatriados con profesionales locales que entiendan sus necesidades específicas y puedan proporcionar servicios adaptados a su situación, mientras se fomenta una comunidad de apoyo mutuo.'
                : 'To connect expatriates with local professionals who understand their specific needs and can provide services tailored to their situation, while fostering a community of mutual support.'}
            </p>
          </div>
        </div>
        
        {/* Historia */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <p className="mb-4">
                {language === 'es' 
                  ? 'SOS Expats nació en 2020 como respuesta a las dificultades que su fundadora, María Rodríguez, experimentó durante su vida como expatriada. Tras regresar a España, María identificó la necesidad de una plataforma que facilitara la integración de los expatriados en el país.'
                  : 'SOS Expats was born in 2020 in response to the difficulties that its founder, María Rodríguez, experienced during her life as an expatriate. After returning to Spain, María identified the need for a platform that would facilitate the integration of expatriates in the country.'}
              </p>
              <p className="mb-4">
                {language === 'es' 
                  ? 'Lo que comenzó como un blog con recursos para expatriados evolucionó hasta convertirse en una plataforma completa que conecta a profesionales locales con la creciente comunidad de expatriados en España.'
                  : 'What started as a blog with resources for expatriates evolved into a complete platform that connects local professionals with the growing community of expatriates in Spain.'}
              </p>
              <p>
                {language === 'es' 
                  ? 'Hoy, SOS Expats es una de las principales referencias para los expatriados que buscan establecerse en España, con una red de profesionales verificados en áreas como servicios legales, financieros, educativos y de bienestar.'
                  : 'Today, SOS Expats is one of the main references for expatriates looking to settle in Spain, with a network of verified professionals in areas such as legal, financial, educational, and wellness services.'}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/assets/images/expats/expatriates.png"
                  alt="Historia de SOS Expats"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Equipo */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.position[language]}</p>
                  <p className="text-sm text-gray-700">{member.bio[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {language === 'es' ? 'Nuestros Valores' : 'Our Values'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                {language === 'es' ? 'Confianza' : 'Trust'}
              </h3>
              <p>
                {language === 'es' 
                  ? 'Verificamos a todos los profesionales de nuestra red para asegurar que ofrecen servicios de calidad y confiables.'
                  : 'We verify all professionals in our network to ensure they offer quality and reliable services.'}
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                {language === 'es' ? 'Comunidad' : 'Community'}
              </h3>
              <p>
                {language === 'es' 
                  ? 'Fomentamos la creación de una comunidad de apoyo donde expatriados y profesionales puedan compartir experiencias y conocimientos.'
                  : 'We encourage the creation of a support community where expatriates and professionals can share experiences and knowledge.'}
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                {language === 'es' ? 'Adaptabilidad' : 'Adaptability'}
              </h3>
              <p>
                {language === 'es' 
                  ? 'Entendemos las diferentes necesidades de los expatriados y trabajamos para ofrecer soluciones adaptadas a cada situación.'
                  : 'We understand the different needs of expatriates and work to offer solutions adapted to each situation.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
