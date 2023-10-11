import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../assets/styles/variables'
import { Image } from 'react-native';
import logo from '../../../assets/images/logo.png'
import search_icon from '../../../assets/images/search.png'
import menu_icon from '../../../assets/images/menu.png'

function index() {
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Image source={logo} style={styles.logoImage}  />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
        <Image source={search_icon} style={styles.image} />
        </TouchableOpacity>
       
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
        <Image source={menu_icon} style={styles.image} />
        </TouchableOpacity>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
  logoImage: {
    height: 16,
    width: 132,
  },
  container: {
    backgroundColor: colors.primary,
    padding: 15,
    position: 'sticky',
    top: 0,
    zIndex: 999,
    borderBottomWidth: 0.2,
    borderBottomStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchContainer: {
    flex: 1,
    justifyContent: 'flex-start', 
  },

  iconContainer: {
    width: Dimensions.get('window').width * 0.10,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'flex-end',
  },

  iconWrapper: {
    alignSelf: 'flex-end',
    marginRight: 0,
    
  },

})

export default index;
