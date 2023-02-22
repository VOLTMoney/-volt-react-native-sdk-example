import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View } from "react-native"
import QuickCard from "./components/QuickCard"
import Separator from "./components/Separator"

const QuickActions = () => {
    const navigation =  useNavigation()
    return(
        <View>
<QuickCard title={'Invest in mutual funds'}/>
<Separator />
<QuickCard title={'Invest in stocks'}/>
<Separator />
<QuickCard title={'Invest in fixed deposit'}/>
<Separator />
<QuickCard title={'Loan against mutual funds & stocks'} onCardClick={() => {navigation.navigate('LoanMF')}} 
/>
</View>
    )
}

export default QuickActions