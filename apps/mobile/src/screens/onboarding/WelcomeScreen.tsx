import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useTheme } from '../../theme/ThemeProvider';

type NavigationProp = NativeStackNavigationProp<OnboardingStackParamList, 'Welcome'>;

export const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <Animated.View 
        style={[
          styles.container, 
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
        ]}
      >
        <View style={styles.content}>
          <View style={[styles.iconContainer, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
            <Text style={styles.icon}>🕯️</Text>
          </View>
          
          <Text style={[styles.title, { color: theme.text }]}>Memora</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>Keep them close, always</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.primaryButton, { backgroundColor: theme.primary }]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('WhoToRemember')}
          >
            <Text style={styles.primaryButtonText}>Begin</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            activeOpacity={0.6}
            onPress={() => {/* Log in logic */}}
          >
            <Text style={[styles.secondaryButtonText, { color: theme.textTertiary }]}>
              I already have an account
            </Text>
          </TouchableOpacity>

          <View style={[styles.divider, { borderTopColor: theme.border }]}>
            <Text style={[styles.footerText, { color: theme.textTertiary }]}>
              A private space to remember{'\n'}the ones who shaped you
            </Text>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: { 
    flex: 1, 
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  content: {
    alignItems: 'center',
    marginTop: 40,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 24,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#C97B3A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  icon: {
    fontSize: 34,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 34,
    fontWeight: '500',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#C97B3A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FDF0E0',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  secondaryButton: {
    paddingVertical: 10,
    marginBottom: 40,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    width: '100%',
    borderTopWidth: 0.5,
    paddingTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.8,
  },
});
