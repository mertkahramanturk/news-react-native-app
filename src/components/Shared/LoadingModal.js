import { Image } from 'expo-image';
import React, { forwardRef, useState, useEffect } from 'react';
import { View, Modal, StyleSheet, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/images/logo.png'
const Loading = forwardRef(({ visible: initialVisible }, ref) => {

    const [visible, setVisible] = useState(initialVisible);
    useEffect(() => {
        setVisible(initialVisible);
    }, [initialVisible]);
    
    const open = () => {
        setVisible(true);
    };
    const close = () => {
        setVisible(false);
    };

    React.useImperativeHandle(ref, () => ({ open, close }));

    return (

        <Modal visible={visible} animationType="none" transparent={true}>
        <View style={styles.modalBackground}>
        <Animatable.View animation="zoomIn" easing="ease-in-out" iterationCount="infinite">
        <Image source={logo} style={styles.image} />
      </Animatable.View>
        </View>
      </Modal>
    );
});

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
 
    image: {
      width: 100,
      height: 100,
      contentFit: 'contain',
  
    },
  });


export default Loading;
