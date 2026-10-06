import React from 'react';
import { View, StyleSheet, ViewProps, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface CardProps extends ViewProps {
  variant?: 'default' | 'highlight' | 'dark';
  onPress?: () => void;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = 'default', onPress, style, children, ...props }) => {
  const { theme } = useTheme();

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'highlight':
        return {
          backgroundColor: theme.card,
          borderColor: theme.cardBorder,
          borderWidth: 0.5,
        };
      case 'dark':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        };
      case 'default':
      default:
        return {
          backgroundColor: '#fff',
          borderColor: theme.border,
          borderWidth: 0.5,
        };
    }
  };

  const Container = onPress ? TouchableOpacity : (View as any);
  
  return (
    <Container
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      style={[styles.base, getVariantStyles(), style]}
      {...props}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 14,
    padding: 14,
    overflow: 'hidden',
  },
});
