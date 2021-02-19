import React, { Component } from 'react'

import { StatusBar, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';
 
/////////////////////////   PAGES   /////////////////////////////////////
import SignIn from '../pages/signIn'
import Home from '../pages/home'
import CreditCard from '../pages/creditCard'
import Profile from '../pages/profile'
import Money from '../pages/money'
import Dashboard from '../pages/dashboard'
////////////////////////////////////////////////////////////////////////



/////////////////////////     SVG´s    ////////////////////////////////////
import SvgAccountProfile from '../assets/SvgAccountProfile'
import SvgCreditCard from '../assets/SvgCreditCard'
import SvgHome from '../assets/SvgHome'
import SvgMoney from '../assets/SvgMoney'
///////////////////////////////////////////////////////////////////////////





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsScreen = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          position: "relative",
          height: 40,
          paddingVertical: 5,
          paddingBottom: 5,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#E9F0FB",
        },
      }}
      initialRouteName='Dashboard'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if(route.name === 'Home'){
            return(
              <View style={{backgroundColor:'#5B628F', borderRadius: 10, width: 32, height: 32, alignItems: 'center', justifyContent: 'center'}}>
                <Icon name='add' size={20} color='#FFF'/>
              </View>
            );
          }else if(route.name === 'Dashboard'){
            return(
              <SvgHome fill='#333' width={25} height={25}/>
            ); 
          }else if(route.name === 'Credit'){
            return(
              <SvgCreditCard fill='#333' width={30} height={30}/>
            );
          }else if(route.name === 'Money'){
            return(
              <SvgMoney fill='#333' width={25} height={25}/>
            );
          }else{
            return(
              <SvgAccountProfile fill='#333' width={25} height={25}/>
            );
          }
        },
      })}
    >
      <Tab.Screen name='Dashboard' component={Dashboard} />
      <Tab.Screen name='Credit' component={CreditCard} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Money' component={Money} />
      <Tab.Screen name='Profile' component={Profile} />
      
      
    </Tab.Navigator>
  );
}

class root extends Component{
    render() {
        return (
          <>
          <StatusBar backgroundColor='#5B628F'barStyle='light-content'/>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SignIn"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="Home" component={TabsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          </>
        );
      }
}

export default root