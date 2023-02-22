import React from 'react';
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'

interface YellowTitleProps {
    title: string
    backIconExists: boolean
    reloadIconExists: boolean
    onBackPress?: () => void
}

const YellowTitle = ({ title, backIconExists, reloadIconExists, onBackPress }: YellowTitleProps) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={onBackPress}>
            {backIconExists ? (<Image style= {styles.backImage} source= {require("../assets/back_icon.webp")}/>): null}
            </TouchableOpacity>
<Text style= {styles.title}>
    {title}
</Text>
{reloadIconExists ? (<Image style= {styles.reloadIcon} source= {require("../assets/reload_icon.webp")}/>): null}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DF903B',
        height: 46,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 16,
        marginVertical: 4,
    },
    backImage: {
        marginLeft: 18
    },
    reloadIcon: {
        position: 'absolute',
        right: 0,
        marginRight: 16,
    }
})

export default YellowTitle