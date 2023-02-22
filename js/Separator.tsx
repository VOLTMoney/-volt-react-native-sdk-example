import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

interface SeparatorProps {
    extraStyle?: ViewStyle
}

const Separator = ({ extraStyle }: SeparatorProps) => {
    return (
        <View style = {[styles.hairline, extraStyle]}/>
    )
}

const styles = StyleSheet.create({
    hairline: {
        backgroundColor: '#E4E7EC',
        height: 1,
        width: '90%',
        alignSelf: 'center'
      },
})

export default Separator