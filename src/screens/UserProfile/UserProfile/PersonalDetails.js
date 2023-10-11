//Main
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Dimensions, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
//Action
import { getByIdRequest, resetList } from '../../../redux/actions/base/getByIdRequestAction';
//Style
import { colors, fontSize } from '../../../assets/styles/variables'
import { useGlobalStyles } from '../../../assets/styles/GlobalStylingContext';
//Form
import { Formik } from 'formik';
//Component
import Button from '../../../components/Shared/Button';
import ProfileImageSection from './ProfileImageSection'
import LoadingModal from '../../../components/Shared/LoadingModal';
//Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
//helper
import {getUser} from '../../../utils/helpers/userHelper'
const PersonalDetails = () => {

  const dispatch = useDispatch();
  const { t } = useTranslation()
  const globalStyles = useGlobalStyles();
  const navigation = useNavigation();

  userProfileData = useSelector(state => state.userProfileInfo.data)
  loading = useSelector(state => state.userProfileInfo.loading)

  useEffect(() => {
    getUser()?.then(user => {
      console.log(user)
      if (user !== null) {
        dispatch(getByIdRequest('users', user))
      }
    })
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
			dispatch(resetList('users'))
			dispatch(resetList('users'))
		}, []);

  return unsubscribe;
}, [navigation]);

useFocusEffect(
  React.useCallback(() => {
    getUser().then(user => {
      if (user !== null) {
        dispatch(getByIdRequest('users', user))
      }
    })
}, [])
);

  const goBack = () => {
    navigation.navigate('Profile')
  }

  onSubmit = async(values) => {
   
  }

  return (
    <React.Fragment>
         <View style={styles.screenHeaderContainer}>
    <View style={styles.goBackButtonContainer}>
            <Button
              key={1}
              onPress={() => navigation.navigate('Profile')}
              title={[
                <AntDesign
                  name="arrowleft"
                  size={15}
                  color={colors.mutedDark}
                  style={styles.goBackButtonText}
                />,
                <Text
                  style={[
                    { color: colors.mutedDark, fontSize: fontSize.fontSize14 },
                    globalStyles.textMedium,
                  ]}>
                  {t('buttons.go_back')}{' '}
                </Text>,
              ]}
            />
          </View>
        <View style={styles.screenHeaderBody}>
        <Text style={[globalStyles.textMedium, styles.headerText]} >
          { t('profile.personal_details_screen.title')}
          </Text>
        </View>
      </View>
    <ScrollView>
      <ProfileImageSection image={userProfileData?.image} />
      <View style={styles.container}>
        <Formik
          initialValues={userProfileData}
          enableReinitialize
          onSubmit={values => onSubmit(values)}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <View style={styles.containerWrapper}  key={1}>
              <View style={styles.innerContainer}>

                <Text style={[globalStyles.textMedium, styles.text]}>
                  {t('form.first_name.field')}
                </Text>
                <TextInput
                  value={values.firstName}
                  style={styles.input}
                  onChangeText={handleChange('firstName')}
                  onBlur={() => setFieldTouched('firstName')}
                />

                <Text style={[globalStyles.textMedium, styles.text]}>
                  {t('form.last_name.field')}
                </Text>
                <TextInput
                  value={values.lastName}
                  style={styles.input}
                  onChangeText={handleChange('lastName')}
                  onBlur={() => setFieldTouched('lastName')}
                />

                <Text style={[globalStyles.textMedium, styles.text]}>
                  {t('form.email.field')}
                </Text>
                <TextInput
                  value={values.last_name}
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />

                <Text Text style={[globalStyles.textMedium, styles.text]}>
                  {t('form.gender.field')}
                </Text>
                <TextInput
                  value={values.gender}
                  style={styles.input}
                  onChangeText={handleChange('gender')}
                  onBlur={() => setFieldTouched('gender')}
                />
                <View style={{ height: 16 }}></View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
    <LoadingModal visible={loading} />
    </React.Fragment>

  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.7,
  },
  screenHeaderContainer: {
    width: Dimensions.get('window').width * 1,
    backgroundColor: colors.white,
    flexDirection: 'column',

  },
  screenHeaderBody:{
    width: Dimensions.get('window').width * 0.5,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 1,

  },
  goBackButtonContainer: {
    backgroundColor: colors.softWhite,
    borderBottomRightRadius: 20,
    position: 'absolute',
  },
  innerContainer: {
    width: Dimensions.get('window').width * 0.75,
    justifyContent: 'center',
    marginBottom: 20,

  },
  containerWrapper: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    borderRadius: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 20,
    backgroundColor: colors.white,
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
  headerText: {
    fontSize: fontSize.fontSize14,
    marginTop: 15,
    marginBottom: 15

  },
  goBackButtonText: {
  },
  title: {
    fontSize: fontSize.fontSize12,
    color: colors.primary
  },
  subTitle: {
    fontSize: fontSize.fontSize16,
  }
})


export default PersonalDetails;
