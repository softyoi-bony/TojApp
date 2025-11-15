import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OrderDetailsScreen from '../screens/Orders/OrderDetailsScreen';
import OrderHistoryScreen from '../screens/Orders/OrderHistoryScreen';
import { colors } from '../utils/theme';

export type OrdersStackParamList = {
  OrderHistory: undefined;
  OrderDetails: { orderId: string };
};

const Stack = createNativeStackNavigator<OrdersStackParamList>();

export const OrdersStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
};
