import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MemoryDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MemoryDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
