import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AppTheme from "./AppTheme";
import LoanMF from "./LoanMF";
import MutualFundPortfolio from "./MutualFundPortfolio";
import React from 'react'
import App from "./App";
import VoltWebView from "./VoltWebView";


const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="App"
          component={App}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MutualFund" component={MutualFundPortfolio}
 />
         <Stack.Screen name="LoanMF" component={LoanMF}
/><Stack.Screen name="VoltWebView" component={VoltWebView}
/>
<Stack.Screen name="AppTheme" component={AppTheme}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default MainStackNavigator
