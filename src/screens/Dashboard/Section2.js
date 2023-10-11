import React, { Fragment, useEffect } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
//Action
import { getRequest } from '../../redux/actions/base/getRequestAction'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native'
import { colors, fontSize } from '../../assets/styles/variables'
import { useGlobalStyles } from '../../assets/styles/GlobalStylingContext';
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

function Section1() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { t } = useTranslation()
  const item = useSelector(state => state.newsQueryPageList?.data?.results)

  useEffect(() => {
    dispatch(getRequest('reference/news', 5))
  }, [])

  onPressProduct = (itemId) => {
    navigation.navigate('ProductDetail', { itemId });
  }

  return (
    <View style={styles.popularNewsContainer}>
      <Text style={styles.flatTitle}>{t('common_words.popular')} </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={1}
        keyExtractor={(item, index) => item?.id}
        data={item}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => this.onPressProduct(item?.id)} key={`${item.title}-${index}`} activeOpacity={1}>
            <View style={styles.popularNewsWrapper} >
              <View >
              <Text style={[useGlobalStyles.textBold, styles.popularListIndex]}>{index + 1} </Text>
              </View>
              <View>
              <Text style={[useGlobalStyles.textBold, styles.description]}>{item?.title} </Text>
                <Text style={[useGlobalStyles.textBold, styles.publisherText]}>{item?.publisher?.name} </Text>
              </View>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor:'#E1E6EB', justifyContent:'center', margin: 20}}></View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  popularListIndex: {
    fontSize: fontSize.fontSize48,
    fontWeight: '700',
    color: '#BFC3C9',
    margin: 20
  },
  popularNewsWrapper: {
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    width: Dimensions.get('window').width * 0.80,

  },
  description: {
    fontSize: fontSize.fontSize16,
    fontWeight: '400',
    lineHeight:24
  },
  publisherText: {
    fontSize: fontSize.fontSize16,
    fontWeight: '700',
    lineHeight:16,
    marginTop: 15,
    marginBottom: 20
  },

  flatTitle: {
    fontSize: fontSize.fontSize20,
    fontWeight: '700',
    margin:20,
    color: colors.primary
  },
});


export default Section1