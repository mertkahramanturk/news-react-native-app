import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import UserIsNotLogin from './UserIsNotLogin';
import UserProfilMenu from './UserProfile/UserProfileMenu'
import Logout from './UserProfile/Logout'
import { getUser } from '../../utils/helpers/userHelper';
import { Text } from 'react-native';
import { colors, fontSize } from '../../assets/styles/variables';
import { useNavigation } from '@react-navigation/native';
import { useGlobalStyles } from '../../assets/styles/GlobalStylingContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/auth/logoutAction';
const UserProfile = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); 
  const success = useSelector(state => state.login?.success);
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const globalStyles = useGlobalStyles();
  const {t} = useTranslation()


  const jwtDelete = async () => {

      try {
          await AsyncStorage.clear();
          dispatch(logoutAction())
          setUserIsLoggedIn(false)
          navigation.navigate('Home');

      } catch (error) {
          console.error(error);
      }
  };
  useEffect(() => {
       getUser()?.then(user => {
          if(user !== null) {
            setUserIsLoggedIn(true);
          }else {
            setUserIsLoggedIn(false)
          }
        });

  }, [userIsLoggedIn, success]);
  return (
    <View style={styles.container}>
      {userIsLoggedIn ? <UserProfilMenu /> : <UserIsNotLogin />}
      {userIsLoggedIn && 
       <View style={stylesLogout.container}>

       <TouchableOpacity
           style={stylesLogout.menuOption}
           onPress={() => jwtDelete('logout')}
       >
           <View style={stylesLogout.menuOptionContainer}>
               <AntDesign name={'logout'} size={25} color={colors.black} />
               <View style={stylesLogout.textWrapper}>
                   <Text style={[stylesLogout.menuOptionText, globalStyles.textMedium]}>{t('profile.menu.logout')} </Text>
               </View>
               <View style={stylesLogout.okIconContainer}>
                   <AntDesign name={'arrowright'} size={20} color={colors.primary} />
               </View>
           </View>
       </TouchableOpacity>

   </View>
      } 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
  },
});
const stylesLogout = StyleSheet.create({
  container: {
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      marginTop: 10,
      marginBottom: 10
  },
  menuOption: {
      alignItems: 'center',
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

export default UserProfile;
