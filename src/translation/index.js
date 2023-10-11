import {  initReactI18next } from 'react-i18next';
import i18next from 'i18next';
//Language File
import en from './locales/en/common.json';
import tr from './locales/tr/common.json';
//Helper
import {timeSince} from '../utils'
import {getDeviceLanguage} from '../utils/deviceLanguage'
import "intl";
import { Platform } from "react-native";
if (Platform.OS === "android") {
  if (typeof Intl !== "undefined" && typeof Intl.__disableRegExpRestore === "function") {
    Intl.__disableRegExpRestore();
  }
}

const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  },
};

const deviceLanguage = getDeviceLanguage();

i18next
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: deviceLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    appendNamespaceToMissingKey: false,
    parseMissingKeyHandler: (key) => {
      if (key.split(":")[0] === "message") {
        return i18n.t('message:default_error');
      } else {
        return key;
      }
    },
    interpolation: {
      escapeValue: false,

      format: (value, format, lng) => {
        if (value instanceof Date) {
          if (format === "ago") {
            return timeSince(value);
          }
        }
        return value.toString();
      }
    },
  });


export default i18next;
