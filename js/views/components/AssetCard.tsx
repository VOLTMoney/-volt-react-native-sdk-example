import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

interface AssetCardProps { 
    title: string
    amount: string
    onPress?: () => void
}

const AssetCard = ({title, amount, onPress}: AssetCardProps) => {
    return(
        <View style= {styles.container}>
          <View style={styles.childContainer}>
            <Text style= {styles.title}>
{title}
            </Text>
<Text style= {styles.amount}>
    {amount}
</Text>
          </View>
<TouchableOpacity onPress={onPress}>
          <View style= {styles.rightCTA}>
          <Text style= {styles.viewCTA}>
            View
          </Text>
          <Image source={require('../assets/right_arrow.webp')} />
          </View>
          </TouchableOpacity>


        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    childContainer: {
       flexDirection: 'column',
       marginLeft: 16,
       marginTop: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 4,
    },
    amount: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    rightCTA: {
        flexDirection: 'row', 
        height: 20,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginRight: 12,
        marginTop: 32,
        flex: 1
    },
    viewCTA: {
        color: '#DF903B',
        fontSize: 14,
        fontWeight: '600',
        justifyContent: 'center'
    },
})

export default AssetCard