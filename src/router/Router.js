import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home/Home';
import Fitness from '../pages/fitness/Fitness';
import User from '../pages/user/User';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Fitness" component={Fitness} />
        <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}
const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainApp} options={{headerShown:false}} />
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
