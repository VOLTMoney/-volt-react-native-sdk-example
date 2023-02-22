import React from "react"
import { NativeModules, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import YellowTitle from "./components/YellowTitle"

const AppTheme = () => {
    const voltSDK =  NativeModules.VoltSDK
    const openVoltSDK = () => {
        return voltSDK.initializeVoltApplication()
    }

    return(
        <View style= {styles.mainContainer}>
            <YellowTitle title={"Customised app theme"} backIconExists={true} reloadIconExists={false} />
            <View style= {styles.container}>
            <Text style= {styles.primaryColorText}>Primary color</Text>
            <View style= {styles.roundedBorder}>
                <View style= {[styles.colorBox]}></View>
              <Text style= {styles.text}>{`#DF903B`}</Text>
            </View>
            <Text style= {[styles.primaryColorText, {marginTop: 52}]}>Secondary color</Text>
            <View style= {styles.roundedBorder}>
                <View style= {[styles.colorBox]}></View>
              <Text style= {styles.text}>{`#DF903B`}</Text>
            </View>
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
      marginLeft: 32,
      marginTop: 32,
    },
    primaryColorText: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 12
    },
    roundedBorder: {
        width: '92%',
        height: 52,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        padding: 4,
    },
    colorBox: {
      width: 24,
      height: 24,
      borderRadius: 2,
      borderWidth: 1,
      color: '#DF903B',
      alignSelf: 'center',
      marginLeft: 12,
      backgroundColor: '#DF903B',
      borderColor: '#DF903B'
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