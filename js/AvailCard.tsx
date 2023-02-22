import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const AvailCard = () => {
    const navigation = useNavigation()
    return (
        <View style= {styles.container}>
                        <TouchableOpacity onPress={() => {navigation.navigate('LoanMF')}}>
            <View style= {styles.childContainer}>
                <Image style= {styles.image} source={require("../assets/info_icon.webp")} />
                <Text style= {styles.infoText}>Avail an instant credit line of <Text style= {styles.amount}>Rs.50,00,000</Text></Text>
            </View>
            <View style= {{flexDirection: 'row'}}>
            <Text style= {styles.cta}>
                Get started
            </Text>
            <Image style= {styles.rightArrow} source={require("../assets/right_arrow.webp")}/>
            </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '92%',
      marginTop: 16,
      borderRadius: 8,
      backgroundColor: '#F3FAF6',
      justifyContent: 'center',
      alignSelf: 'center',
      padding: 4,
      marginBottom: 18
    },
    childContainer: {
        flexDirection: 'row',
        margin: 4,
    },
    image: {
      width: 18,
      height: 18,
      alignSelf: 'center'
    },
    infoText: {
      fontSize: 16,
      fontWeight: '400',
      marginLeft: 12,
    },
    amount: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    cta: {
        color: '#DF903B',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 32,
    },
    rightArrow: {
        width: 22,
        height: 22, 
        alignSelf: 'center'
    }
})

export default AvailCard