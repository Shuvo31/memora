import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const HomeScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.greeting, { color: theme.textTertiary }]}>Good morning</Text>
        <Text style={[styles.title, { color: theme.text }]}>Your memories</Text>
      </View>
      
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text style={styles.avatarText}>M</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Maa</Text>
          <Text style={[styles.cardSubtitle, { color: theme.textSecondary }]}>My mother · 847 memories</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, { borderColor: theme.textTertiary }]}>
        <Text style={[styles.buttonText, { color: theme.textSecondary }]}>+ Add a memory</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 18,
  },
  greeting: {
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  card: {
    margin: 14,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FDF0E0',
    fontSize: 20,
    fontWeight: '500',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  button: {
    margin: 18,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
});
