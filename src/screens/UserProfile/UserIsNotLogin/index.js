import React from 'react'
import {StyleSheet, View} from 'react-native'
import UserIsNotLogin from './UserIsNotLogin';

 function index() {
  return (
    <View style={styles.container}>
        <UserIsNotLogin />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      marginLeft: 15,
    },
  });

  export default index