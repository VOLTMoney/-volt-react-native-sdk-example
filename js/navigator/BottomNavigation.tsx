import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App from '../views/App';
import { Image } from 'react-native';
import MainStackNavigator from './Navigator';

const Tab = createBottomTabNavigator()
function BottomNavigation() {
    return (
    <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={() => ({
          tabBarActiveTintColor: '#DF903B',
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 6
          }
        })}>
            <Tab.Screen name={'Home'} component={MainStackNavigator} options={{ tabBarIcon:({ focused }) => 
                (<Image style={{tintColor: focused? '#DF903B': '#667085'}} source={require("../assets/home_icon.webp")}/>)}}/>
            <Tab.Screen name={'Portfolio'} component={App} options={{ tabBarIcon:({ focused }) => 
                (<Image style={{tintColor: focused? '#DF903B': '#667085'}} source={require("../assets/portfolio_icon.webp")}/>)}}/>
            <Tab.Screen name={'Transactions'} component={App} options={{ tabBarIcon:({ focused }) => 
                (<Image style={{tintColor: focused? '#DF903B': '#667085'}} source={require("../assets/transactions_icon.webp")}/>)}}/>
            <Tab.Screen name={'Menu'} component={App} options={{ tabBarIcon:({ focused }) => 
                (<Image style={{tintColor: focused? '#DF903B': '#667085'}} source={require("../assets/menu.webp")}/>)}}/>
        </Tab.Navigator>
    </NavigationContainer>
    )
 } 
      
export default BottomNavigation; 