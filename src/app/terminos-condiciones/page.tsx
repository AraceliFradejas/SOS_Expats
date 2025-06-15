"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function TerminosCondiciones() {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {language === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
      </h1>
      
      <div className="prose max-w-none">
        {language === 'es' ? (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introducción</h2>
            <p className="mb-4">
              Bienvenido a SOS Expats. Estos Términos y Condiciones rigen el uso que usted haga de nuestra plataforma web y establecen las condiciones bajo las cuales SOS Expats le ofrece sus servicios.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definiciones</h2>
            <p className="mb-4">
              &ldquo;Plataforma&rdquo; se refiere al sitio web SOS Expats, accesible desde sosexpats.com.
              <br />&ldquo;Usuario&rdquo; se refiere a cualquier persona que acceda, navegue o se registre en la plataforma.
              <br />&ldquo;Profesional&rdquo; se refiere a aquellos usuarios que ofrecen servicios a través de nuestra plataforma.
              <br />&ldquo;Expatriado&rdquo; o &ldquo;Expat&rdquo; se refiere a aquellos usuarios que buscan servicios en nuestra plataforma.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Registro y cuentas de usuario</h2>
            <p className="mb-4">
              Para utilizar ciertos servicios de nuestra plataforma, es necesario que se registre y cree una cuenta de usuario. Usted se compromete a proporcionar información precisa, actualizada y completa durante el proceso de registro y a mantener actualizada dicha información.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Responsabilidades del usuario</h2>
            <p className="mb-4">
              Usted es responsable de mantener la confidencialidad de su información de cuenta, incluida su contraseña, y de todas las actividades que ocurran bajo su cuenta. SOS Expats no será responsable de ninguna pérdida o daño que surja del incumplimiento de esta obligación.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Servicios ofrecidos</h2>
            <p className="mb-4">
              SOS Expats actúa como una plataforma intermediaria entre profesionales y expatriados. No somos proveedores directos de los servicios listados por los profesionales y no garantizamos la calidad, seguridad o legalidad de dichos servicios.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Política de cancelación y reembolsos</h2>
            <p className="mb-4">
              Las políticas de cancelación y reembolso varían según el profesional. Le recomendamos revisar las políticas específicas de cada profesional antes de contratar sus servicios.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Propiedad intelectual</h2>
            <p className="mb-4">
              Todo el contenido presente en la plataforma, incluyendo logotipos, textos, gráficos, imágenes, videos, software y código, es propiedad de SOS Expats o de sus proveedores y está protegido por leyes de propiedad intelectual.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modificaciones de los términos</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la plataforma. Su uso continuado de la plataforma después de cualquier cambio constituye su aceptación de los nuevos términos.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Legislación aplicable</h2>
            <p className="mb-4">
              Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre estos Términos y Condiciones, comuníquese con nosotros a través de nuestro formulario de contacto o envíenos un correo electrónico a info@sosexpats.com.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to SOS Expats. These Terms and Conditions govern your use of our web platform and set forth the conditions under which SOS Expats offers you its services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p className="mb-4">
              &ldquo;Platform&rdquo; refers to the SOS Expats website, accessible from sosexpats.com.
              <br />&ldquo;User&rdquo; refers to any person who accesses, browses, or registers on the platform.
              <br />&ldquo;Professional&rdquo; refers to those users who offer services through our platform.
              <br />&ldquo;Expatriate&rdquo; or &ldquo;Expat&rdquo; refers to those users who seek services on our platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Registration and user accounts</h2>
            <p className="mb-4">
              To use certain services of our platform, you need to register and create a user account. You agree to provide accurate, current, and complete information during the registration process and to keep this information updated.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User responsibilities</h2>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account. SOS Expats will not be liable for any loss or damage arising from your failure to comply with this obligation.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Services offered</h2>
            <p className="mb-4">
              SOS Expats acts as an intermediary platform between professionals and expatriates. We are not direct providers of the services listed by professionals and do not guarantee the quality, safety, or legality of such services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cancellation and refund policy</h2>
            <p className="mb-4">
              Cancellation and refund policies vary by professional. We recommend reviewing the specific policies of each professional before hiring their services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual property</h2>
            <p className="mb-4">
              All content on the platform, including logos, text, graphics, images, videos, software, and code, is the property of SOS Expats or its providers and is protected by intellectual property laws.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications to the terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Modifications will take effect immediately after their publication on the platform. Your continued use of the platform after any changes constitutes your acceptance of the new terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Applicable legislation</h2>
            <p className="mb-4">
              These terms will be governed and interpreted in accordance with the laws of Spain, without regard to its conflict of laws provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us through our contact form or send us an email at info@sosexpats.com.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
