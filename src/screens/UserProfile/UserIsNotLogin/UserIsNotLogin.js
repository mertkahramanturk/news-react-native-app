import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useGlobalStyles } from '../../../assets/styles/GlobalStylingContext';
import { colors } from '../../../assets/styles/variables';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Shared/Button';

function UserIsNotLogin() {
  const { t } = useTranslation()
  const navigation = useNavigation();

  const globalStyles = useGlobalStyles();

  return (
    <View style={styles.mainContainer}>
      <Text style={[globalStyles.textMedium, styles.titleText]}>
        {t('profile.user_is_not_login.title')}
      </Text>
      <Text style={[globalStyles.textRegular, styles.descriptionText]}>
        {t('profile.user_is_not_login.description')}
      </Text>
      <View style={styles.container}>
        <View style={{marginRight: 30}}>
          <Button title={t('buttons.login')} onPress={() => navigation.navigate('Login')} style={loginButtonStyle}></Button>
        </View>
       
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20

  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 100,
  },
  titleText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 10
  },
  descriptionText: {
    fontSize: 12,
    color: colors.muted,
    textAlign: 'center',

  }

})
const loginButtonStyle = StyleSheet.create({
  buttonGeneral: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: 125
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  }
})
const registerButtonStyle = StyleSheet.create({
  buttonGeneral: {
    borderWidth: 1, 
    borderColor: colors.primary, 
    borderRadius: 20,
    width: 125

  },
  buttonText: {
    fontSize: 14,
    color: colors.primary,
  }
})

export default UserIsNotLogin