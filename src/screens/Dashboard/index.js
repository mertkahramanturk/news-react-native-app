//import liraries
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Section1 from './Section1';
import Section2 from './Section2';
import { useSelector } from 'react-redux';
import LoadingModal from '../../components/Shared/LoadingModal'
import { VirtualizedList } from 'react-native';

function Index() {
  const loading_product= useSelector(state => state.newsQueryPageList.data?.loading)
  const item = useSelector(state => state.newsQueryPageList?.data?.results)

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (loading_product) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [loading_product]);

  

  return (
    <SafeAreaView style={[styles.container]} contentInsetAdjustmentBehavior="automatic">
    <ScrollView>
      <View style={styles.wrapper}>
      <Section1 />
      <Section2 />
      </View>
      <LoadingModal visible={loading} />
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});
export default Index;
