import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, StyleSheet, Text, View, NativeModules, TouchableOpacity } from "react-native"
import LoadBenefits from "./LoadBenefits"
import YellowTitle from "./YellowTitle"

const LoanMF = () => {
    const navigation = useNavigation()
    const voltSDK =  NativeModules.VoltSDK
    const goBack = () => {
        if(navigation.canGoBack()) {
          navigation.goBack()
        }
      }

    const openVoltSDK = () => {
        return voltSDK.initializeVoltApplication()
    }

    return(
        <View style= {styles.container}>
        <YellowTitle title={"Loan against MF"} backIconExists={true} reloadIconExists={false} onBackPress={() => goBack()} />
        <Image style={styles.loanBackgroundImage} source={require("../assets/loan_background.webp")}/>
        <Text style={styles.title}>
            Don't redeem it, Lein it instead
        </Text>
        <Text style={styles.description}>
        {`Don’t sacrifice your long term goals for short \nterm needs`}
        </Text>
        <View style= {styles.benefits}>
        <LoadBenefits title={"Get up to Rs. 50L in 5 minutes"}/>
        <LoadBenefits title={"Only pay interest for what you withdraw"}/>
        <LoadBenefits title={"Interest rates starting at 9%"}/>
        <LoadBenefits title={"100% digital, no paperwork"}/>
        </View> 
        <View style={styles.applyCTA}>
        <TouchableOpacity onPress={openVoltSDK}>
            <Text style= {styles.applyNowButton}>
                Apply now
            </Text>
            </TouchableOpacity>
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    loanBackgroundImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '92%',
        resizeMode: 'contain',
        marginBottom: 34,
        marginTop: 24
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 32,
        color: 'black'
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 32,
        marginTop: 14
    },
    benefits: {
        marginTop: 18
    },
    applyCTA: {width: '92%', height: 52, borderWidth: 2, borderRadius: 24, borderColor: '#DF903B', justifyContent: 'center', alignSelf: 'center', bottom: 12, position: 'absolute'},
    applyNowButton: { color: '#DF903B', fontSize: 16, fontWeight: '700', textAlign: 'center'}
})

export default LoanMF