"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SuccessMessage from '@/components/SuccessMessage';
import Image from 'next/image';

export default function SolicitarServicio() {
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Información Personal
    nombreCompleto: '',
    email: '',
    telefono: '',
    nacionalidad: '',
    
    // Información sobre la Necesidad
    tipoServicio: '',
    descripcionDetallada: '',
    urgencia: '',
    presupuestoOrientativo: '',
    
    // Información de Contexto
    situacionActual: '',
    tiempoEspana: '',
    ciudadServicio: '',
    preferenciaIdioma: '',
    
    // Información de Contacto Preferida
    horarioPreferido: '',
    metodoContacto: '',
    
    // Consentimientos
    autorizacionDatos: false,
    suscripcionNewsletter: false,
    politicaPrivacidad: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario de servicio enviado:', formData);
    // Aquí iría la lógica de envío
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header con imagen */}
          <div className="text-center mb-8">
            <div className="mb-6">
              {/* Imagen de expats */}
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/assets/images/expats/formulario_expats.png"
                  alt={t('form.service.image_placeholder')}
                  width={800}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('form.service.title')}</h1>
            <p className="text-lg text-gray-600 mb-8">{t('form.service.subtitle')}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información Personal del Solicitante */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">
                {t('form.service.personal_info')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.full_name')} *
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.phone')} *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.nationality')}
                  </label>
                  <input
                    type="text"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('form.service.nationality_placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Información sobre la Necesidad */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">
                {t('form.service.service_need')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.service_type')} *
                  </label>
                  <select
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">{t('form.service.select_service')}</option>
                    <option value="asesoria-legal">{t('form.service.legal_advisory')}</option>
                    <option value="inmobiliaria">{t('form.service.real_estate')}</option>
                    <option value="gestiones-administrativas">{t('form.service.administrative')}</option>
                    <option value="fiscal-contable">{t('form.service.tax_accounting')}</option>
                    <option value="educacion">{t('form.service.education')}</option>
                    <option value="salud">{t('form.service.health')}</option>
                    <option value="traduccion">{t('form.service.translation')}</option>
                    <option value="otros">{t('form.service.others')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.detailed_description')} *
                  </label>
                  <textarea
                    name="descripcionDetallada"
                    value={formData.descripcionDetallada}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('form.service.description_placeholder')}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.descripcionDetallada.length}/500 {t('form.service.characters')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.service.urgency')} *
                    </label>
                    <select
                      name="urgencia"
                      value={formData.urgencia}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">{t('form.service.select_urgency')}</option>
                      <option value="inmediata">{t('form.service.immediate')}</option>
                      <option value="esta-semana">{t('form.service.this_week')}</option>
                      <option value="este-mes">{t('form.service.this_month')}</option>
                      <option value="no-hay-prisa">{t('form.service.no_rush')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.service.budget_range')}
                    </label>
                    <select
                      name="presupuestoOrientativo"
                      value={formData.presupuestoOrientativo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t('form.service.select_budget')}</option>
                      <option value="menos-100">&lt; 100€</option>
                      <option value="100-300">100€ - 300€</option>
                      <option value="300-500">300€ - 500€</option>
                      <option value="500-1000">500€ - 1.000€</option>
                      <option value="1000-2000">1.000€ - 2.000€</option>
                      <option value="mas-2000">&gt; 2.000€</option>
                      <option value="consultar">{t('form.service.to_consult')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Información de Contexto */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">
                {t('form.service.context_info')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.current_situation')} *
                  </label>
                  <select
                    name="situacionActual"
                    value={formData.situacionActual}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">{t('form.service.select_situation')}</option>
                    <option value="estudiante">{t('form.service.student')}</option>
                    <option value="profesional">{t('form.service.professional')}</option>
                    <option value="buscando-trabajo">{t('form.service.job_seeker')}</option>
                    <option value="jubilado">{t('form.service.retired')}</option>
                    <option value="emprendedor">{t('form.service.entrepreneur')}</option>
                    <option value="otro">{t('form.service.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.time_in_spain')}
                  </label>
                  <select
                    name="tiempoEspana"
                    value={formData.tiempoEspana}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t('form.service.select_time')}</option>
                    <option value="recien-llegado">{t('form.service.just_arrived')}</option>
                    <option value="menos-1-ano">{t('form.service.less_than_year')}</option>
                    <option value="1-3-anos">{t('form.service.one_to_three_years')}</option>
                    <option value="mas-3-anos">{t('form.service.more_than_three_years')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.service_city')} *
                  </label>
                  <input
                    type="text"
                    name="ciudadServicio"
                    value={formData.ciudadServicio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('form.service.city_placeholder')}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.language_preference')}
                  </label>
                  <select
                    name="preferenciaIdioma"
                    value={formData.preferenciaIdioma}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t('form.service.select_language')}</option>
                    <option value="espanol">{t('form.service.spanish')}</option>
                    <option value="ingles">{t('form.service.english')}</option>
                    <option value="frances">{t('form.service.french')}</option>
                    <option value="aleman">{t('form.service.german')}</option>
                    <option value="italiano">{t('form.service.italian')}</option>
                    <option value="portugues">{t('form.service.portuguese')}</option>
                    <option value="otro">{t('form.service.other_language')}</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Información de Contacto Preferida */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">
                {t('form.service.contact_preferences')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.preferred_schedule')}
                  </label>
                  <select
                    name="horarioPreferido"
                    value={formData.horarioPreferido}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t('form.service.select_schedule')}</option>
                    <option value="manana">{t('form.service.morning')}</option>
                    <option value="tarde">{t('form.service.afternoon')}</option>
                    <option value="noche">{t('form.service.evening')}</option>
                    <option value="fin-semana">{t('form.service.weekend')}</option>
                    <option value="flexible">{t('form.service.flexible')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.service.preferred_contact_method')}
                  </label>
                  <select
                    name="metodoContacto"
                    value={formData.metodoContacto}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t('form.service.select_contact_method')}</option>
                    <option value="email">{t('form.service.email_contact')}</option>
                    <option value="telefono">{t('form.service.phone_contact')}</option>
                    <option value="whatsapp">{t('form.service.whatsapp_contact')}</option>
                    <option value="presencial">{t('form.service.in_person_contact')}</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Consentimientos */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-2">
                {t('form.service.consents')}
              </h2>
              
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="autorizacionDatos"
                    checked={formData.autorizacionDatos}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-sm">
                    {t('form.service.data_authorization')} *
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="suscripcionNewsletter"
                    checked={formData.suscripcionNewsletter}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm">
                    {t('form.service.newsletter_subscription')}
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="politicaPrivacidad"
                    checked={formData.politicaPrivacidad}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-sm">
                    {t('form.service.privacy_policy_acceptance')} 
                    <a href="/politica-privacidad" className="text-blue-600 hover:underline ml-1" target="_blank">
                      {t('form.service.privacy_policy_link')}
                    </a> *
                  </span>
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                {t('form.service.submit_request')}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {showSuccess && (
        <SuccessMessage 
          type="service" 
          onClose={() => setShowSuccess(false)} 
        />
      )}
    </div>
  );
}
