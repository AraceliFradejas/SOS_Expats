import { useLanguage } from '@/contexts/LanguageContext';

export default function PoliticaPrivacidad() {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
      </h1>
      
      <div className="prose max-w-none">
        {language === 'es' ? (
          <>
            <p className="mb-4">
              Fecha de última actualización: 14 de junio de 2025
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introducción</h2>
            <p className="mb-4">
              En SOS Expats, nos comprometemos a proteger su privacidad y a procesar sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la UE y otras leyes de protección de datos aplicables.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Responsable del tratamiento</h2>
            <p className="mb-4">
              El responsable del tratamiento de sus datos personales es SOS Expats S.L., con domicilio social en Calle Ejemplo 123, 28001 Madrid, España.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Datos que recopilamos</h2>
            <p className="mb-4">
              Podemos recopilar los siguientes tipos de datos:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Datos de identificación (nombre, apellidos, DNI/NIE)</li>
              <li>Datos de contacto (dirección de correo electrónico, número de teléfono, dirección postal)</li>
              <li>Datos profesionales (formación, experiencia laboral, servicios ofrecidos)</li>
              <li>Datos de pago (información de tarjeta de crédito, datos bancarios)</li>
              <li>Datos técnicos (dirección IP, tipo de navegador, dispositivo)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Finalidades del tratamiento</h2>
            <p className="mb-4">
              Tratamos sus datos personales para los siguientes fines:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Gestionar su registro y cuenta de usuario</li>
              <li>Facilitar la conexión entre profesionales y expatriados</li>
              <li>Procesar pagos y gestionar suscripciones</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>Mejorar nuestros servicios y personalizar su experiencia</li>
              <li>Cumplir con nuestras obligaciones legales</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Base legal para el tratamiento</h2>
            <p className="mb-4">
              Procesamos sus datos personales basándonos en:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Su consentimiento</li>
              <li>La necesidad de ejecutar un contrato con usted</li>
              <li>Nuestros intereses legítimos (siempre que no prevalezcan sus derechos y libertades)</li>
              <li>El cumplimiento de obligaciones legales</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Destinatarios de los datos</h2>
            <p className="mb-4">
              Podemos compartir sus datos personales con:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Otros usuarios de la plataforma (según la funcionalidad del servicio)</li>
              <li>Proveedores de servicios (procesadores de pago, servicios de alojamiento web)</li>
              <li>Autoridades competentes cuando sea requerido por ley</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Transferencias internacionales</h2>
            <p className="mb-4">
              Sus datos personales pueden ser transferidos y procesados en países fuera de la Unión Europea. En tales casos, nos aseguramos de que se implementen las garantías adecuadas de acuerdo con el RGPD.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Período de conservación</h2>
            <p className="mb-4">
              Conservaremos sus datos personales mientras mantenga una cuenta activa en nuestra plataforma o mientras sea necesario para los fines para los que fueron recopilados, a menos que se requiera o permita un período de retención más largo por ley.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Sus derechos</h2>
            <p className="mb-4">
              Bajo el RGPD, usted tiene los siguientes derechos:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre el tratamiento de sus datos personales o desea ejercer alguno de sus derechos, puede contactarnos a través de nuestro formulario de contacto o enviarnos un correo electrónico a privacidad@sosexpats.com.
            </p>
          </>
        ) : (
          <>
            <p className="mb-4">
              Last updated: June 14, 2025
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At SOS Expats, we are committed to protecting your privacy and processing your personal data in accordance with the EU General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data controller</h2>
            <p className="mb-4">
              The data controller of your personal data is SOS Expats S.L., with registered office at Calle Ejemplo 123, 28001 Madrid, Spain.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data we collect</h2>
            <p className="mb-4">
              We may collect the following types of data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identification data (name, surname, ID/NIE)</li>
              <li>Contact details (email address, phone number, postal address)</li>
              <li>Professional data (education, work experience, services offered)</li>
              <li>Payment data (credit card information, bank details)</li>
              <li>Technical data (IP address, browser type, device)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Purposes of processing</h2>
            <p className="mb-4">
              We process your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Managing your registration and user account</li>
              <li>Facilitating the connection between professionals and expatriates</li>
              <li>Processing payments and managing subscriptions</li>
              <li>Sending communications related to our services</li>
              <li>Improving our services and personalizing your experience</li>
              <li>Complying with our legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Legal basis for processing</h2>
            <p className="mb-4">
              We process your personal data based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your consent</li>
              <li>The need to perform a contract with you</li>
              <li>Our legitimate interests (as long as your rights and freedoms do not prevail)</li>
              <li>Compliance with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Recipients of the data</h2>
            <p className="mb-4">
              We may share your personal data with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Other platform users (according to the functionality of the service)</li>
              <li>Service providers (payment processors, web hosting services)</li>
              <li>Competent authorities when required by law</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. International transfers</h2>
            <p className="mb-4">
              Your personal data may be transferred to and processed in countries outside the European Union. In such cases, we ensure that appropriate safeguards are implemented in accordance with the GDPR.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Retention period</h2>
            <p className="mb-4">
              We will retain your personal data as long as you maintain an active account on our platform or as long as necessary for the purposes for which it was collected, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Your rights</h2>
            <p className="mb-4">
              Under the GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request the deletion of your data</li>
              <li>Object to the processing of your data</li>
              <li>Request the limitation of processing</li>
              <li>Request the portability of your data</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
            <p className="mb-4">
              If you have any questions about the processing of your personal data or wish to exercise any of your rights, you may contact us through our contact form or send us an email at privacy@sosexpats.com.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
