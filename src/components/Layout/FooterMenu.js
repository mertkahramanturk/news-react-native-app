import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, fontSize } from '../../assets/styles/variables'
import { useGlobalStyles,  } from '../../assets/styles/GlobalStylingContext';
import { useTranslation } from 'react-i18next';
import {useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';

const FooterMenu = ({ activeMenuOption, handleMenuClick }) => {

  const navigation = useNavigation();
  const { t } = useTranslation()


  const handleMenuOptionPress = (menuOption) => {
    handleMenuClick(menuOption);
    navigation.navigate(menuOption);
  };
  return (
    <View style={styles.container}>
      <FooterMenuOption
        iconActive="home-variant"
        iconInactive="home-variant-outline"
        label={t('footer_menu.dashboard')}
        menuOption="Home"
        activeMenuOption={activeMenuOption}
        onPress={() =>handleMenuOptionPress('Home')}
      />
      <FooterMenuOption
        iconActive="account-circle-outline"
        iconInactive="account-circle-outline"
        label={t('footer_menu.profile')}
        menuOption="Profile"
        activeMenuOption={activeMenuOption}
        onPress={() => handleMenuOptionPress('Profile')}
      />
    </View>
  );
};

const FooterMenuOption = ({ iconActive, iconInactive, label, menuOption, activeMenuOption, onPress, localIcon, iconType }) => {
  const globalStyles = useGlobalStyles();
  const isActive = activeMenuOption === menuOption;

  return (
    <TouchableOpacity
      style={styles.menuOption}
      onPress={() => onPress()}
    >
      
      <View style={styles.menuOptionContainer}>
        
        {!localIcon ? isActive ? (
          <MaterialIcons name={iconActive} size={25} color={colors.primary} />
        ) : (
          <MaterialIcons name={iconInactive} size={25} color={colors.mutedDark} />
        ) : <Image source={{uri: iconInactive}} style={styles.image} />
      }

        <Text style={isActive ? [styles.menuOptionTextActive, globalStyles.textMedium] : [styles.menuOptionText, globalStyles.textMedium]}>
          {label}
        </Text>
        
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffff',
    height: 70,
    borderTopWidth: 0.2,
    borderTopColor: colors.muted,
    borderTopStyle: 'solid',
  },
  menuOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOptionContainer: {
    alignItems: 'center',
  },
  menuOptionTextActive: {
    fontSize: fontSize.fontSize10,
    color: colors.primary,
  },
  menuOptionText: {
    fontSize: fontSize.fontSize10,
    color: colors.content,
  },
  image: {
    width: 24,
    height: 24

  },
  basketCount: {
    position: 'absolute',
    top: -8, 
    right: 0, 
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  basketCountText: {
    color: 'white',
    fontSize: 12,
  }
});

export default FooterMenu;
