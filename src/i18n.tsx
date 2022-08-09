import i18next from 'i18next';
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import translationEN from "../locales/en/translation.json";
import translationFR from "../locales/fr/translation.json";

const resources = {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  };

// var resource = require('../../../../locales/en/translation.json')
i18next
.use(initReactI18next) //passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
  fallbackLng:"en",
  detection: {
    order: [ 'cookie',  'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie']
  },
   resources,
//   backend: {
//     loadPath: '../../../../locales/{{lng}}/translation.json',
//   },
  react: { useSuspense: false}
});