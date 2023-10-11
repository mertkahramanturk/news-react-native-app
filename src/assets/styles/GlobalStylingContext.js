// GlobalStylingContext.js

import React, { createContext, useContext } from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';

const GlobalStylingContext = createContext(null);
import { useFonts } from 'expo-font';
import { colors } from './variables';

export const useGlobalStyles = () => useContext(GlobalStylingContext);

export default StyleSheet.create({
   
});

export const GlobalStylingProvider = ({ children }) => {

    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('../font/Poppins-Light.ttf'),
        'Poppins-Regular': require('../font/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../font/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../font/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../font/Poppins-Bold.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

  const globalStyles = StyleSheet.create({
    androidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
    textRegular: {
      fontFamily:  'Poppins-Regular', 
    },
    textLight: {
        fontFamily:  'Poppins-Light', 
      },
      textMedium: {
        fontFamily:  'Poppins-Medium', 
      },
      textSemiBold: {
        fontFamily:  'Poppins-SemiBold', 
      },
      textBold: {
        fontFamily:  'Poppins-Bold', 
      },
  });

  return (
    <GlobalStylingContext.Provider value={globalStyles}>
      {children}
    </GlobalStylingContext.Provider>
  );
};
