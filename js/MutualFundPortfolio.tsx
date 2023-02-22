import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AvailCard from "./AvailCard"
import MutualFundCard from "./MutualFundCard"
import MutualFundItem from "./MutualFundItem"
import Separator from "./Separator"
import YellowTitle from "./YellowTitle"


const MutualFundPortfolio = () => {
    const navigation = useNavigation();
    navigation.setOptions({ tabBarVisible: false })

    const goBack = () => {
        if (navigation.canGoBack()) { 
            navigation.goBack();
          }
    }

    return (
        <View>
            <YellowTitle title={"Mutual fund portfolio"} backIconExists={true} reloadIconExists={true} onBackPress={goBack} />
            <View style= {styles.fundCardContainer}>
            <MutualFundCard title={'Current Value'} amount={'$1,00,00,000'} />
            <MutualFundCard title={'Invested Value'} amount={'$85,00,000'} lastCard={true} />
            </View>
            <View style= {{backgroundColor: 'white', height: '100%'}}>
            <AvailCard />
            <Text style= {styles.mutualFundText}>
                Your mutual funds
            </Text>
            <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18, marginTop: 24}}>
            <Text>
Mutual fund
            </Text>
            <Text>
Value
            </Text>
            </View>
            <Separator extraStyle={{marginTop: 4}} />
            <MutualFundItem title={"Axis Long Term Equity"} type={"Mutual Funds"} amount={"$40,00,000"} />
            <Separator />
            <MutualFundItem title={"Aditya Birla SL Equity"} type={"Advantage Direct"} amount={"$10,00,000"} />
            <Separator />
            <MutualFundItem title={"DSP Flexi Cap Fund Direct Plan"} amount={"$20,00,000"} />
            <Separator />
            <MutualFundItem title={"ICICI Prudential All Seasons"} type={"Bond Fund Direct Plan"} amount={"$14,00,000"} />
            <Separator />
            <MutualFundItem title={"SBI Magnum Gilt Fund Direct-Growth"} amount={"$16,00,000"} />
            <Separator />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    fundCardContainer: {
        width: '100%',
        paddingVertical: 16,
        flexDirection: 'row',
        backgroundColor: '#F1F3F5'
    },
    mutualFundText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        marginLeft: 18
    }
})

export default MutualFundPortfolio




// 
