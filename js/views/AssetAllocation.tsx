import { useNavigation } from "@react-navigation/native";
import React from "react"
import { StyleSheet, View } from "react-native"
import AssetCard from "./components/AssetCard"
import Separator from "./components/Separator"


function AssetAllocation () {
    const navigation = useNavigation();

    return (
        <View style= {styles.container}>
  <AssetCard title= {'MF Portfolio'} amount= {'$100,00,000'} onPress={() => {navigation.navigate('MutualFund')}}/>
  <Separator extraStyle={styles.separatorStyle}/>
  <AssetCard title= {'Stocks Portfolio'} amount= {'$70,00,0000'}/>
  <Separator extraStyle={styles.separatorStyle} />
  <AssetCard title= {'Fixed income portfolio'} amount= {'$50,00,0000'}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 24,
    },
    separatorStyle: {
        marginVertical: 4,
    }
})

export default AssetAllocation