import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, fontSize } from '../../../assets/styles/variables'
import { useGlobalStyles } from '../../../assets/styles/GlobalStylingContext';
import { useTranslation } from 'react-i18next';

const FooterMenu = () => {
  const { t } = useTranslation()
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();


  const handleMenuClick = (menuOption) => {
    switch (menuOption) {
      case 'User Profile':
        navigation.navigate('UserProfile');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.menuOption}
        onPress={() => handleMenuClick('User Profile')}
      >
        <View style={styles.menuOptionContainer}>
        <MaterialIcons name={"account"} size={25} color={colors.black} />
          <View style={styles.textWrapper}>
            <Text style={[styles.menuOptionText, globalStyles.textMedium]}>{t('profile.menu.personal_details')} </Text>
          </View>
          <View style={styles.okIconContainer}>
            <AntDesign name={'arrowright'} size={20} color={colors.primary} />
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: colors.white
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.2,
    borderColor: colors.mutedLight,
    width: Dimensions.get('window').width * 1,
  },
  menuOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20
  },
  menuOptionText: {
    fontSize: fontSize.fontSize14,
    color: colors.black,
    marginRight: 20,
  },
  textWrapper: {
    marginLeft: 10,
  },
  okIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default FooterMenu;
