import { NativeModules, Platform } from 'react-native';

export const getDeviceLanguage = () => {
  if (Platform.OS === 'android') {
    return NativeModules.I18nManager.localeIdentifier;
  } else {
    return NativeModules.SettingsManager.settings.AppleLocale ||
           NativeModules.SettingsManager.settings.AppleLanguages[0];
  }
};
