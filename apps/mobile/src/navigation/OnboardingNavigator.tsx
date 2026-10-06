import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from './types';
import { WelcomeScreen } from '../screens/onboarding/WelcomeScreen';
import { WhoToRememberScreen } from '../screens/onboarding/WhoToRememberScreen';
import { AddPersonScreen } from '../screens/onboarding/AddPersonScreen';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="WhoToRemember" component={WhoToRememberScreen} />
      <Stack.Screen name="AddPerson" component={AddPersonScreen} />
    </Stack.Navigator>
  );
};
