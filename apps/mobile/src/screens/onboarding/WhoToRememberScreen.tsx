import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

type NavigationProp = NativeStackNavigationProp<OnboardingStackParamList, 'WhoToRemember'>;

const OPTIONS = [
  { id: 'mother', emoji: '👩', label: 'Mother' },
  { id: 'father', emoji: '👨', label: 'Father' },
  { id: 'partner', emoji: '💑', label: 'Partner' },
  { id: 'grandparent', emoji: '👴', label: 'Grandparent' },
  { id: 'sibling', emoji: '👫', label: 'Sibling' },
  { id: 'friend', emoji: '🤝', label: 'Friend' },
  { id: 'child', emoji: '👶', label: 'Child' },
  { id: 'other', emoji: '💛', label: 'Someone else' },
];

export const WhoToRememberScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState<string>('mother');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Typography variant="label" color={theme.primary} style={styles.step}>STEP 1 OF 2</Typography>
        <Typography variant="h2" style={styles.title}>Who would you like{'\n'}to remember?</Typography>
        <Typography variant="caption" style={styles.subtitle}>You can add more people later</Typography>
      </View>

      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
        {OPTIONS.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <TouchableOpacity
              key={option.id}
              activeOpacity={0.7}
              onPress={() => setSelectedId(option.id)}
              style={styles.gridItem}
            >
              <Card
                variant={isSelected ? 'highlight' : 'default'}
                style={[
                  styles.optionCard,
                  isSelected && { borderColor: theme.primary, borderWidth: 1.5 }
                ]}
              >
                <Text style={styles.emoji}>{option.emoji}</Text>
                <Typography 
                  variant="caption" 
                  style={[styles.optionLabel, isSelected && { color: theme.text, fontWeight: '600' }]}
                >
                  {option.label}
                </Typography>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={() => navigation.navigate('AddPerson')} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  step: {
    marginBottom: 8,
  },
  title: {
    lineHeight: 28,
  },
  subtitle: {
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  gridItem: {
    width: '31%', // roughly 3 columns
  },
  optionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 4,
    borderRadius: 16,
    minHeight: 110,
  },
  emoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  optionLabel: {
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 16,
  },
});
