import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface AvatarProps {
  initials?: string;
  emoji?: string;
  size?: number;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, emoji, size = 40, variant = 'primary', style }) => {
  const { theme } = useTheme();

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'secondary':
        return { backgroundColor: theme.card, borderColor: theme.cardBorder, borderWidth: 1 };
      case 'outline':
        return { backgroundColor: '#E8CBA8', borderColor: 'transparent', borderWidth: 0 };
      case 'dark':
        return { backgroundColor: '#3A2010', borderColor: '#7A4828', borderWidth: 1.5 };
      case 'primary':
      default:
        return { backgroundColor: theme.primary, borderColor: 'transparent', borderWidth: 0 };
    }
  };

  const getTextColor = () => {
    if (variant === 'dark') return '#C4A880';
    if (variant === 'secondary') return theme.primary;
    if (variant === 'outline') return '#8B5030';
    return '#FDF0E0';
  };

  return (
    <View style={[styles.base, { width: size, height: size, borderRadius: size / 2 }, getVariantStyles(), style]}>
      {emoji ? (
        <Text style={{ fontSize: size * 0.5 }}>{emoji}</Text>
      ) : (
        <Text style={[styles.text, { fontSize: size * 0.4, color: getTextColor() }]}>{initials}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
  },
});
