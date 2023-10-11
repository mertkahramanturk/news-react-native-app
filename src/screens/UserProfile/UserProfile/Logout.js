import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, fontSize } from '../../../assets/styles/variables'
import { useGlobalStyles } from '../../../assets/styles/GlobalStylingContext';
import { useTranslation } from 'react-i18next';
import {logoutAction} from '../../../redux/actions/auth/logoutAction'
const FooterMenu = () => {
    const { t } = useTranslation()
    const navigation = useNavigation();
    const globalStyles = useGlobalStyles();


    const jwtDelete = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Home');

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.menuOption}
                onPress={() => jwtDelete('logout')}
            >
                <View style={styles.menuOptionContainer}>
                    <AntDesign name={'logout'} size={25} color={colors.black} />
                    <View style={styles.textWrapper}>
                        <Text style={[styles.menuOptionText, globalStyles.textRegular]}>{t('profile.menu.logout')} </Text>
                    </View>
                    <View style={styles.okIconContainer}>
                        <AntDesign name={'arrowright'} size={20} color={colors.primary} />
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
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
        fontSize: fontSize.fontSize16,
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

export default FooterMenu;
