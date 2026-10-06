import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { RootStackParamList } from './types';

import { TabNavigator } from './TabNavigator';
import { OnboardingNavigator } from './OnboardingNavigator';

// Modals
import { AddMemoryModal } from '../screens/modals/AddMemoryModal';
import { FamilyInviteModal } from '../screens/modals/FamilyInviteModal';
import { AnniversaryRitualModal } from '../screens/modals/AnniversaryRitualModal';
import { CandleRitualModal } from '../screens/modals/CandleRitualModal';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const hasCompletedOnboarding = useSelector((state: RootState) => state.app.hasCompletedOnboarding);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main flow conditionally rendered based on onboarding status */}
      {!hasCompletedOnboarding ? (
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      ) : (
        <Stack.Screen name="Main" component={TabNavigator} />
      )}

      {/* Modals rendered on top of everything else */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="AddMemoryModal" component={AddMemoryModal} />
        <Stack.Screen name="FamilyInviteModal" component={FamilyInviteModal} />
        <Stack.Screen name="AnniversaryRitualModal" component={AnniversaryRitualModal} />
        <Stack.Screen name="CandleRitualModal" component={CandleRitualModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
