import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useGlobalStyles } from '../../assets/styles/GlobalStylingContext';

const Button = ({ onPress, title, style, loading, disabled }) => {

    const globalStyles = useGlobalStyles();

    return (
    <TouchableOpacity key={1} disabled={loading} onPress={!disabled && onPress} style={!disabled ? [styles.button, style?.buttonGeneral] : [styles.button, style?.buttonGeneralPassive]} activeOpacity={1}>
         {/* loading durumuna göre buraya loading componenti z */}
         {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={[style?.buttonText, globalStyles.textMedium]} >{title}</Text>
          )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Button;
