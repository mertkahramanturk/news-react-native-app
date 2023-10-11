import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../assets/styles/variables';
import { useState } from 'react';

import FooterMenu from '../components/Layout/FooterMenu';
import Topbar from '../components/Layout/Topbar';

{/* Main Screen */ }
import LoginPage from '../screens/AuthPages/LoginPage';
import Dashboard from '../screens/Dashboard';
import UserProfilePage from '../screens/UserProfile';
import * as Linking from 'expo-linking';

{/* Profile Screen */ }
import PersonalDetailsPage from '../screens/UserProfile/UserProfile/PersonalDetails';

const Router = () => {
  const [activeMenuOption, setActiveMenuOption] = useState('Home');

  const handleMenuClick = (menuOption) => {
    setActiveMenuOption(menuOption);
  };
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function DashboardStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DashboardStack" component={Dashboard} options={{ cardStyle: { backgroundColor: colors.softWhite } }} />
      </Stack.Navigator>
    );
  }

  function LoginStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginStack" component={LoginPage} options={{ cardStyle: { backgroundColor: colors.softWhite } }} />
      </Stack.Navigator>
    );
  }

  function UserProfileDetailStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserProfileStack" component={PersonalDetailsPage} options={{ cardStyle: { backgroundColor: colors.softWhite } }} />
      </Stack.Navigator>
    );
  }

 

  function ProfileStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProfileStack" component={UserProfilePage} options={{ cardStyle: { backgroundColor: colors.softWhite } }} />
      </Stack.Navigator>
    );
  }

  function MyTabs({navigation}) {

    const handleMenuChange = (menuOption) => {
      handleMenuClick(menuOption);
      navigation.navigate(menuOption)
    };

    return (
      <Tab.Navigator tabBar={() => <FooterMenu activeMenuOption={activeMenuOption} handleMenuClick={handleMenuChange} />} screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={DashboardStack} />
        <Tab.Screen name="Login" component={LoginStack} />
        <Tab.Screen name="UserProfile" component={UserProfileDetailStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />

      </Tab.Navigator>
    );
  }
  const prefix = Linking.createURL('/');

  const config = {
    screens: {
      Signup: 'signup/:token',
      ResetPassword: 'resetpassword/:token'
    },
  };
  
  const linking = {
    prefixes: [prefix],
    config
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ header: () => <Topbar /> }}>
         <Stack.Screen name="Main" component={MyTabs} options={{ cardStyle: { backgroundColor: colors.white } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
