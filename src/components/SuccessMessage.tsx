"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

interface SuccessMessageProps {
  type: 'professional' | 'service';
  onClose: () => void;
}

export default function SuccessMessage({ type, onClose }: SuccessMessageProps) {
  const { t } = useLanguage();
  const router = useRouter();

  const handleContinue = () => {
    onClose();
    router.push('/');
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {type === 'professional' ? t('form.professional.success_title') : t('form.service.success_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {type === 'professional' ? t('form.professional.success_message') : t('form.service.success_message')}
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleContinue}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t('form.success.continue')}
          </button>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {type === 'professional' ? t('form.professional.success_follow_up') : t('form.service.success_follow_up')}
          </div>
        </div>
      </div>
    </div>
  );
}
