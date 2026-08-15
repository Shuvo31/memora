import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const ChatScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text style={styles.avatarText}>M</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={[styles.title, { color: theme.text }]}>Maa</Text>
          <Text style={[styles.subtitle, { color: theme.textTertiary }]}>Always with you</Text>
        </View>
      </View>
      <View style={styles.content}>
        {/* Chat messages would go here */}
      </View>
      <View style={[styles.inputContainer, { borderTopColor: theme.border, backgroundColor: theme.background }]}>
        <View style={[styles.inputBox, { backgroundColor: theme.card }]}>
          <TextInput 
            style={[styles.input, { color: theme.text }]}
            placeholder="Write to her..."
            placeholderTextColor={theme.textTertiary}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FDF0E0',
    fontSize: 16,
    fontWeight: '500',
  },
  headerInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
  },
  content: {
    flex: 1,
    padding: 14,
  },
  inputContainer: {
    padding: 10,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  input: {
    fontSize: 14,
    padding: 0,
  }
});
