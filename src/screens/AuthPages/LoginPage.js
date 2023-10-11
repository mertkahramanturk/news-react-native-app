import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Dimensions, View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGlobalStyles } from '../../assets/styles/GlobalStylingContext';
import { colors, fontSize } from '../../assets/styles/variables'
import Button from '../../components/Shared/Button';
import { login } from '../../redux/actions/auth/loginAction'
import { getUser } from '../../utils/helpers/userHelper';


const LoginScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login?.loading);

  const initialValues = {
    email: '',
    password: '',
  };
  const { t } = useTranslation()
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t('validate.required')).email(t('validate.valid_email_address')),
    password: Yup.string().required(t('validate.required')),
  });


  const onSubmit = async (values) => {
    await dispatch(login(1))
    getUser()?.then(user => {
      if (user !== null) {
        navigation.navigate('Home');
      }
    })
  };

  const globalStyles = useGlobalStyles();


  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <View style={styles.containerWrapper}>
            <View style={styles.innerContainer}>
            <Text style={{marginBottom: 20}}>RASTGELE DEĞERLER GİREREK GİRİŞ YAPABİLİRSİNİZ!</Text>  
              <Text style={[styles.subTitle, globalStyles.textSemiBold]} >{t("auth_pages.login.title")}</Text>
              <Text style={[globalStyles.textMedium, styles.text]}>
                {t('form.email.field')}
              </Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}

              />
              {touched.email && errors.email && (
                <Text style={[globalStyles.textRegular, { color: colors.red, fontSize: 10, paddingLeft: 10 }]}>{errors.email}</Text>
              )}

              <Text style={[globalStyles.textMedium, styles.text]}>
                {t('form.password.field')}
              </Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={[globalStyles.textRegular, { color: colors.red, fontSize: 10, paddingLeft: 10 }]}>{errors.password}</Text>
              )}
              <View style={{ height: 16 }}></View>

              <Button onPress={handleSubmit} title={t('buttons.login')} style={loginButtonStyle} loading={loading} disabled={loading} />
             
            </View>

          </View>
        )}
      </Formik>
    </View>
  );
};
const loginButtonStyle = StyleSheet.create({
  buttonGeneral: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: Dimensions.get('window').width * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGeneralPassive: {
    backgroundColor: colors.primaryDisabled,
    color: colors.white,
    width: Dimensions.get('window').width * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: Dimensions.get('window').width * 0.75,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  containerWrapper: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.whiteDark,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    borderRadius: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 20,
    backgroundColor: '#E7F0FE',
    height: 40,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15

  },
  text: {
    fontSize: fontSize.fontSize12,
    paddingTop: 15,
    paddingBottom: 5
  },
  title: {
    fontSize: fontSize.fontSize12,
    color: colors.primary
  },
  subTitle: {
    fontSize: fontSize.fontSize16,
  }
})

export default LoginScreen;
