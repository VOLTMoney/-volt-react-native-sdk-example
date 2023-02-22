import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

interface LoadBenefitsProps {
    title: string
}

const LoadBenefits = ({title}: LoadBenefitsProps) => {
    return(
        <View style= {styles.container}>
            <Image style= {styles.image} source={require("../assets/tick.webp")}/>
            <Text style= {styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 14,
        alignItems: 'center',
        marginLeft: 22,
    },
    image: {
        width: 22,
        height: 22,
        marginHorizontal: 4
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    }
})

export default LoadBenefits