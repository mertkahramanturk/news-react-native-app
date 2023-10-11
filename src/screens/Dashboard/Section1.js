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
  const total = useSelector(state => state.newsQueryPageList?.data?.total)

  useEffect(() => {
    dispatch(getRequest('reference/news', 3))
  }, [])

  onPressNews = (itemId) => {
    //Haber detaylarına yönlendir
    // navigation.navigate('NewsDetail', { itemId });
  }

  //API da pagination özelliği yok

  // loadMoreData = async () => {
  //   const { queryPageInfinityRequest } = this.props
  //   if (this.props?.data?.length < total) {
  //     await queryPageInfinityRequest("accounts/product", { storeVariable: "productListInfinityQueryPage" });
  //     await this.setState({ item: this.state.item?.concat(arrayElementComparison(this.props.data, this.state.item)) })
  //   }
  // };

  return (
    <View>
      <Text style={styles.flatTitle}>{t('common_words.opinion')} </Text>
      <FlatList
        // onEndReached={this.loadMoreData} // Yeni verileri yüklemek için
        // onEndReachedThreshold={1}// liste sonuna yaklaşma
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item?.id}
        data={item}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => this.onPressNews(item?.id)} key={`${item.title}-${index}`} activeOpacity={1}>
            <View style={styles.newsContainer} >
              <View style={styles.imageContainer} >
                <Image source={item?.image_url} style={styles.image} />
              </View>
              <View style={styles.newsInfoContainer} >
                <Text style={[useGlobalStyles.textBold, styles.newsTitle]}>{item?.title} - </Text>
                <Text style={[useGlobalStyles.textLight, styles.newsDescription, styles.textWidth]}>{item?.description} </Text>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                >
                  <Image
                    source={{ uri: item?.publisher?.favicon_url }}
                    style={{ width: 32, height: 32, aspectRatio: 1, borderRadius: 50 }}
                  />
                  <Text style={[useGlobalStyles.textBold, styles.newsPublisherText]}>{item?.publisher?.name} - </Text>
                </View>
              </View>

            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  newsInfoContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 0,
    flexWrap: 'wrap',
    margin: 8,
    marginBottom: 20
  },
  newsTitle: {
    fontSize: fontSize.fontSize28,
    fontWeight: '700',
    lineHeight: 36

  },
  newsDescription: {
    fontSize: fontSize.fontSize16,
    fontWeight: '400',
    lineHeight: 24
  },
  newsPublisherText: {
    fontSize: fontSize.fontSize18,
    fontWeight: '700',
    lineHeight: 24,
    paddingLeft: 20,
  },
  imageContainer: {
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    contentFit: 'contain',
    width: '100%',
    height: Dimensions.get('window').height * 0.24,
    width: Dimensions.get('window').width * 1,

  },
  publisherImageContainer: {
    borderRadius: '50'
  },
  publisherImage: {
    contentFit: 'contain',
    height: 100,
    width: 50,
    borderRadius: 50

  },
  contentContainer: {
    flex: 1,
    padding: 8,
    marginLeft: 8,
    paddingBottom: 0
  },
  flatTitle: {
    fontSize: fontSize.fontSize20,
    fontWeight: '700',
    margin:20,
    color: colors.primary
  },
});


export default Section1