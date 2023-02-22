import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

interface QuickCardProps {
    title: string
    onCardClick?: () => void
}

const QuickCard = ({title, onCardClick}: QuickCardProps) => {
    return(
        <TouchableOpacity onPress={onCardClick}>  
        <View style= {styles.container}>
            <Text style= {styles.title}>{title}</Text>
            <Image source={require('../assets/right_arrow.webp')} />
        </View>            
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
    }
})

export default QuickCard