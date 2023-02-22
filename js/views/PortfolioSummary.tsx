import React from "react"
import { StyleSheet, View } from "react-native"
import PortfolioCard from "./components/PortfolioCard"
import Separator from "./components/Separator"

const PortfolioSummary = () => {
    return (
        <View style ={styles.container}>
        <PortfolioCard primaryText={'Market Value'} amount={'$3,27,38,514'} />
        <PortfolioCard primaryText={'Purchase cost'} amount={'$1,45,66,567'} />
        <Separator />
        <PortfolioCard primaryText={'One day change'} amount={'$1,45,66,567'} percentage={'0.64'} percentageColor={'#F04438'} />
        <PortfolioCard primaryText={'Gain'} amount={'$1,45,66,567'} percentage={'124.86'} percentageColor={'#12B76A'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 22,
    }
})

export default PortfolioSummary