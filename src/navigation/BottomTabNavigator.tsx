import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';
import { RouteNavigator } from './StackKeys';
import HistoryScreen from '../screens/History';


const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={RouteNavigator.Home} screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name={RouteNavigator.Home} component={HomeScreen} />
      <BottomTab.Screen name={RouteNavigator.History} component={HistoryScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;