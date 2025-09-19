import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './i18n/en/translation.json';
import ptTranslation from './i18n/pt/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources, 
    fallbackLng: 'en',
    debug: true,
    
    interpolation: {
      escapeValue: false, 
    },

   
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    defaultNS: 'translation', 
  });

export default i18n;