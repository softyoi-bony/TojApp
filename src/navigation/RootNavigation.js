import React from 'react';
import { useAuthStore } from '../store/authStore';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

const RootNavigation = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <MainTabs /> : <AuthStack />;
};

export default RootNavigation;

