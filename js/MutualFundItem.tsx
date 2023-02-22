import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface MutualFundItemProps {
    title: string
    type?: string
    amount: string
}

const MutualFundItem = ({ title, type, amount }: MutualFundItemProps) => {
return (
    <View style= {styles.container}>
        <View>
          <Text style= {styles.textStyle}>
          {title}
          </Text>
          <Text style= {styles.textStyle}>
          {type}
          </Text>
        </View>
     <Text style= {styles.amount}>
        {amount}
     </Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        padding: 16
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    amount: {
        fontSize: 14,
        fontWeight: '800',
        color: 'black'
    }
})

export default MutualFundItem