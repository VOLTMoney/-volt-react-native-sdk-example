import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface PortfolioCardProps {
    primaryText: string
    amount: string
    percentage?: string
    percentageColor?: string
}

const PortfolioCard = ({ primaryText, amount, percentage, percentageColor } : PortfolioCardProps) => {
    return (
        <View style = {styles.container}>
            <Text style= {styles.primaryText}>
             {primaryText}
            </Text>

<View style= {{flexDirection: 'row'}}>
            <Text style= {[styles.amountText, percentage ? {marginRight: 8}: {marginRight: 24}]}>
             {amount}
            </Text>

            {percentage ?  <Text style= {[styles.percentage, {color: percentageColor}]}> 
             {`(${percentage}%)`}
            </Text>: null}

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    primaryText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        marginVertical: 8,
        marginLeft: 20,
    },
    amountText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        justifyContent: 'flex-end',
        alignSelf: 'center',        
    },
    percentage: {
        fontSize: 10,
        fontWeight: '400',
        alignSelf: 'center',
        marginRight: 12,
        textAlign: 'right'
    }
})

export default PortfolioCard