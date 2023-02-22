import React from "react"
import { StyleSheet, Text, View } from "react-native"


interface MutualFundCard {
    title: string
    amount: string
    lastCard?: boolean
}
const MutualFundCard = ({ title, amount, lastCard }: MutualFundCard) => {
    return(
        <View style= {styles.container}>
  <Text style= {styles.title}>
{title}
  </Text>
  <Text style= {styles.amount}>
    {amount}
  </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     marginLeft: 36,
     justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: '400'
    },
    amount: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    }
})

export default MutualFundCard