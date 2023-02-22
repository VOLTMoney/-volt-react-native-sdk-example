import { useNavigation } from "@react-navigation/native"
import React, { useState } from 'react';
import { NativeModules, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"
import YellowTitle from "./YellowTitle"

const AppTheme = () => {
    const navigation = useNavigation()
    const voltSDK =  NativeModules.VoltSDK
    const [primaryColor, setPrimaryColor] = useState("FF6E31")
    const [secondaryColor, setSecondaryColor] = useState("FF6E31")
    const colors = [
        {key:'1', value:'FF6E31'},
        {key:'2', value:'FFCE30'},
        {key:'3', value:'5B2C6F'},
        {key:'4', value:'27AE60'},
        {key:'5', value:'2E4053'},
    ]
    const openVoltSDK = () => {
        return voltSDK.initializeVoltApplication(primaryColor, secondaryColor)
    }

    return(
        <View style= {styles.mainContainer}>
            <YellowTitle title={"Customised app theme"} backIconExists={true} reloadIconExists={false} onBackPress={() => {navigation?.goBack()}} />
            <View style= {styles.container}>
            <View style= {[styles.roundedBorder]}>
            <Text style= {styles.primaryColorText}>Primary color</Text>
                <View style= {[styles.colorBox, {backgroundColor: `#${primaryColor}`, borderColor: `#${primaryColor}`}]}></View>
            </View>
               <SelectList 
        setSelected={(val) => setPrimaryColor(val)} 
        data={colors} 
        save="value"
        placeholder='FF6E31'
    />
                <View style= {styles.roundedBorder}>
            <Text style= {styles.primaryColorText}>Secondary color</Text>
                <View style= {[styles.colorBox, {backgroundColor: `#${secondaryColor}`, borderColor: `#${secondaryColor}`}]}></View>
            </View>
            <SelectList 
        setSelected={(val) => setSecondaryColor(val)} 
        data={colors} 
        save="value"
        placeholder='FF6E31'
    />
            </View>
            <View style={styles.applyCTA}>
        <TouchableOpacity onPress={openVoltSDK}>
            <Text style= {styles.applyNowButton}>
                Submit
            </Text>
            </TouchableOpacity>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    container: {
      marginTop: 32,
      width: '92%',
      alignSelf: 'center'
    },
    primaryColorText: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 12
    },
    roundedBorder: {
        width: '92%',
        height: 52,
        flexDirection: 'row',
        padding: 4,
        marginTop: 18
    },
    colorBox: {
      width: 24,
      height: 24,
      borderRadius: 2,
      borderWidth: 1,
      color: '#DF903B',
      marginLeft: 12,
      backgroundColor: '#DF903B',
      borderColor: '#DF903B',
    },
    text: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginLeft: 8,
        color: 'black'
    },
    applyCTA: {width: '92%', height: 52, borderWidth: 2, borderRadius: 24, borderColor: '#DF903B', justifyContent: 'center', alignSelf: 'center', bottom: 12, position: 'absolute'},
    applyNowButton: { color: '#DF903B', fontSize: 16, fontWeight: '700', textAlign: 'center'}
})

export default AppTheme