"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SuccessMessage from '@/components/SuccessMessage';
import Image from 'next/image';

export default function InscripcionProfesionales() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Información Básica
    nombreCompleto: '',
    emailProfesional: '',
    telefono: '',
    dniNie: '',
    
    // Información Profesional
    areaEspecializacion: '',
    anosExperiencia: '',
    numeroColegiacion: '',
    colegioProfesional: '',
    idiomas: [],
    
    // Información Comercial
    descripcionServicios: '',
    modalidadTrabajo: '',
    zonaCobertura: '',
    tarifaOrientativa: '',
    
    // Documentación
    certificaciones: null,
    seguroResponsabilidad: null,
    fotoProfesional: null,
    
    // Plan y Pago
    planSeleccionado: '',
    metodoPago: '',
    
    // Aceptaciones
    terminosCondiciones: false,
    politicaPrivacidad: false,
    politicaCalidad: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'idiomas') {
        const updatedIdiomas = checked 
          ? [...formData.idiomas, value]
          : formData.idiomas.filter(idioma => idioma !== value);
        setFormData(prev => ({ ...prev, idiomas: updatedIdiomas }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío
    setShowSuccess(true);
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.nombreCompleto && formData.emailProfesional && formData.telefono && formData.dniNie;
      case 2:
        return formData.areaEspecializacion && formData.anosExperiencia && formData.idiomas.length > 0;
      case 3:
        return formData.descripcionServicios && formData.zonaCobertura;
      case 4:
        return formData.fotoProfesional;
      case 5:
        return formData.planSeleccionado && formData.metodoPago && formData.terminosCondiciones && formData.politicaPrivacidad && formData.politicaCalidad;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header con imagen */}
          <div className="text-center mb-8">
            <div className="mb-6">
              {/* Imagen de profesionales */}
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/assets/images/profesionales/formulario_profesionales.png"
                  alt={t('form.professional.image_placeholder')}
                  width={800}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('form.professional.title')}</h1>
            <p className="text-lg text-gray-600">{t('form.professional.subtitle')}</p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    step === currentStep ? 'bg-blue-600' : 
                    step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  {step < currentStep ? '✓' : step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Paso 1: Información Básica */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">{t('form.professional.step1_title')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.full_name')} *
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
                      {t('form.professional.professional_email')} *
                    </label>
                    <input
                      type="email"
                      name="emailProfesional"
                      value={formData.emailProfesional}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.phone')} *
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
                      {t('form.professional.dni_nie')} *
                    </label>
                    <input
                      type="text"
                      name="dniNie"
                      value={formData.dniNie}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Paso 2: Información Profesional */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">{t('form.professional.step2_title')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.specialization_area')} *
                    </label>
                    <select
                      name="areaEspecializacion"
                      value={formData.areaEspecializacion}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">{t('form.professional.select_area')}</option>
                      <option value="asesoria-legal">{t('form.professional.legal_advisory')}</option>
                      <option value="inmobiliaria">{t('form.professional.real_estate')}</option>
                      <option value="gestiones-administrativas">{t('form.professional.administrative')}</option>
                      <option value="fiscal-contable">{t('form.professional.tax_accounting')}</option>
                      <option value="educacion">{t('form.professional.education')}</option>
                      <option value="salud">{t('form.professional.health')}</option>
                      <option value="traduccion">{t('form.professional.translation')}</option>
                      <option value="otros">{t('form.professional.others')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.years_experience')} *
                    </label>
                    <select
                      name="anosExperiencia"
                      value={formData.anosExperiencia}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">{t('form.professional.select_experience')}</option>
                      <option value="1-2">1-2 {t('form.professional.years')}</option>
                      <option value="3-5">3-5 {t('form.professional.years')}</option>
                      <option value="6-10">6-10 {t('form.professional.years')}</option>
                      <option value="11-15">11-15 {t('form.professional.years')}</option>
                      <option value="15+">{t('form.professional.more_than_15')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.professional_number')}
                    </label>
                    <input
                      type="text"
                      name="numeroColegiacion"
                      value={formData.numeroColegiacion}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('form.professional.number_placeholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.professional_college')}
                    </label>
                    <input
                      type="text"
                      name="colegioProfesional"
                      value={formData.colegioProfesional}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('form.professional.college_placeholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('form.professional.languages')} *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['spanish', 'english', 'french', 'german', 'italian', 'portuguese', 'chinese', 'arabic'].map((lang) => (
                      <label key={lang} className="flex items-center">
                        <input
                          type="checkbox"
                          name="idiomas"
                          value={lang}
                          checked={formData.idiomas.includes(lang)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {t(`form.professional.lang_${lang}`)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 3: Información Comercial */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">{t('form.professional.step3_title')}</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.professional.service_description')} *
                  </label>
                  <textarea
                    name="descripcionServicios"
                    value={formData.descripcionServicios}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={300}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('form.professional.service_description_placeholder')}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.descripcionServicios.length}/300 {t('form.professional.characters')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.work_modality')}
                    </label>
                    <select
                      name="modalidadTrabajo"
                      value={formData.modalidadTrabajo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t('form.professional.select_modality')}</option>
                      <option value="presencial">{t('form.professional.in_person')}</option>
                      <option value="online">{t('form.professional.online')}</option>
                      <option value="ambos">{t('form.professional.both')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.hourly_rate')}
                    </label>
                    <select
                      name="tarifaOrientativa"
                      value={formData.tarifaOrientativa}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t('form.professional.select_rate')}</option>
                      <option value="30-50">30-50 €/h</option>
                      <option value="50-80">50-80 €/h</option>
                      <option value="80-120">80-120 €/h</option>
                      <option value="120-200">120-200 €/h</option>
                      <option value="200+">200+ €/h</option>
                      <option value="proyecto">{t('form.professional.by_project')}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.professional.coverage_area')} *
                  </label>
                  <input
                    type="text"
                    name="zonaCobertura"
                    value={formData.zonaCobertura}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('form.professional.coverage_placeholder')}
                    required
                  />
                </div>
              </div>
            )}

            {/* Paso 4: Documentación */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">{t('form.professional.step4_title')}</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.professional_certifications')}
                    </label>
                    <input
                      type="file"
                      name="certificaciones"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {t('form.professional.file_formats')}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.liability_insurance')}
                    </label>
                    <input
                      type="file"
                      name="seguroResponsabilidad"
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {t('form.professional.pdf_only')}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.professional.professional_photo')} *
                    </label>
                    <input
                      type="file"
                      name="fotoProfesional"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {t('form.professional.image_formats')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Paso 5: Plan y Aceptaciones */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">{t('form.professional.step5_title')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="planSeleccionado"
                        value="basico"
                        checked={formData.planSeleccionado === 'basico'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`text-center ${formData.planSeleccionado === 'basico' ? 'text-blue-600' : ''}`}>
                        <h3 className="text-xl font-bold mb-2">{t('form.professional.basic_plan')}</h3>
                        <p className="text-3xl font-bold mb-4">29€/{t('form.professional.month')}</p>
                        <ul className="text-sm space-y-2">
                          <li>• {t('form.professional.basic_feature1')}</li>
                          <li>• {t('form.professional.basic_feature2')}</li>
                          <li>• {t('form.professional.basic_feature3')}</li>
                        </ul>
                      </div>
                    </label>
                  </div>
                  
                  <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="planSeleccionado"
                        value="premium"
                        checked={formData.planSeleccionado === 'premium'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`text-center ${formData.planSeleccionado === 'premium' ? 'text-blue-600' : ''}`}>
                        <h3 className="text-xl font-bold mb-2">{t('form.professional.premium_plan')}</h3>
                        <p className="text-3xl font-bold mb-4">49€/{t('form.professional.month')}</p>
                        <ul className="text-sm space-y-2">
                          <li>• {t('form.professional.premium_feature1')}</li>
                          <li>• {t('form.professional.premium_feature2')}</li>
                          <li>• {t('form.professional.premium_feature3')}</li>
                          <li>• {t('form.professional.premium_feature4')}</li>
                        </ul>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.professional.payment_method')} *
                  </label>
                  <select
                    name="metodoPago"
                    value={formData.metodoPago}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">{t('form.professional.select_payment')}</option>
                    <option value="tarjeta">{t('form.professional.credit_card')}</option>
                    <option value="transferencia">{t('form.professional.bank_transfer')}</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="terminosCondiciones"
                      checked={formData.terminosCondiciones}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                      required
                    />
                    <span className="text-sm">
                      {t('form.professional.accept_terms')} 
                      <a href="/terminos-condiciones" className="text-blue-600 hover:underline ml-1" target="_blank">
                        {t('form.professional.terms_link')}
                      </a>
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
                      {t('form.professional.accept_privacy')} 
                      <a href="/politica-privacidad" className="text-blue-600 hover:underline ml-1" target="_blank">
                        {t('form.professional.privacy_link')}
                      </a>
                    </span>
                  </label>
                  
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="politicaCalidad"
                      checked={formData.politicaCalidad}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                      required
                    />
                    <span className="text-sm">
                      {t('form.professional.accept_quality')}
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-md font-medium ${
                  currentStep === 1 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                {t('form.professional.previous')}
              </button>
              
              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className={`px-6 py-3 rounded-md font-medium ${
                    !isStepValid(currentStep)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {t('form.professional.next')}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepValid(currentStep)}
                  className={`px-6 py-3 rounded-md font-medium ${
                    !isStepValid(currentStep)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {t('form.professional.submit')}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      
      {showSuccess && (
        <SuccessMessage 
          type="professional" 
          onClose={() => setShowSuccess(false)} 
        />
      )}
    </div>
  );
}
