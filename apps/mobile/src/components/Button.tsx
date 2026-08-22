import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case 'primary':
        return {
          container: {
            backgroundColor: theme.primary,
            shadowColor: theme.primary,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 4,
          },
          text: { color: '#FDF0E0', fontWeight: '600' },
        };
      case 'secondary':
        return {
          container: { backgroundColor: 'transparent' },
          text: { color: theme.textTertiary, fontWeight: '500' },
        };
      case 'outline':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderColor: theme.border,
            borderStyle: 'dashed',
          },
          text: { color: theme.textSecondary, fontWeight: '500' },
        };
      case 'ghost':
        return {
          container: { backgroundColor: 'transparent' },
          text: { color: theme.textSecondary },
        };
      default:
        return { container: {}, text: {} };
    }
  };

  const getSizeStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'small':
        return {
          container: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
          text: { fontSize: 12 },
        };
      case 'large':
        return {
          container: { paddingVertical: 16, paddingHorizontal: 24, borderRadius: 30 },
          text: { fontSize: 16 },
        };
      case 'medium':
      default:
        return {
          container: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 24 },
          text: { fontSize: 14 },
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.base,
        sizeStyles.container,
        variantStyles.container,
        style,
      ]}
      {...props}
    >
      {children ? children : <Text style={[styles.textBase, sizeStyles.text, variantStyles.text]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    letterSpacing: 0.3,
  },
});
