import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './src/setup/locales/en.json';
import ua from './src/setup/locales/ua.json';

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
