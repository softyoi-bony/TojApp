import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { Route, RouteNavigator } from './StackKeys';
import LogIn from '../screens/auth/Login';


const Stack = createNativeStackNavigator();

const RouterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name={RouteNavigator.Home} component={BottomTabNavigator} />
      </Stack.Group>
      <Stack.Screen name={Route.logIn} component={LogIn} />
    </Stack.Navigator>
  );
};

export default RouterNavigator;