import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import en from "../src/locales/en.json"
import es from "../src/locales/es.json"
import fr from "../src/locales/fr.json"

import de from "../src/locales/de.json"

import ar from "../src/locales/ar.json"

import hi from "../src/locales/hi.json"

import bho from "../src/locales/bho.json"


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    de: { translation: de },
    ar: { translation: ar },
    hi: { translation: hi },
    bho: { translation: bho }
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
