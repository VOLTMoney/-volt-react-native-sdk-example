
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = () => {
    const navigation = useNavigation()

    const navigateAppTheme = () => {
        navigation.navigate('AppTheme')
    }
    return (
        <View style ={styles.headingContaiiner}>
            <Text style= {styles.headingTitle}>
                My Wealth App
            </Text>
            <TouchableOpacity onPress={navigateAppTheme}>
            <Image style= {styles.settingIcon} source={require("../assets/settings_icon.webp")}/>    
            </TouchableOpacity>        
        </View>
    )
}

const styles = StyleSheet.create({
    headingContaiiner: {
        flexDirection: 'row',
        width: '100%',
        height: 62,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    headingTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        margin: 16,
    },
    settingIcon: {
        margin: 24, 
        alignSelf: 'center',
        padding: 6
    }

})

export default Header