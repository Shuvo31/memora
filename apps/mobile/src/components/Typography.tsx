import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodyItalic' | 'caption' | 'label';
  color?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'body', color, style, children, ...props }) => {
  const { theme } = useTheme();

  const getVariantStyles = (): TextStyle => {
    switch (variant) {
      case 'h1':
        return { fontFamily: 'Georgia', fontSize: 30, fontWeight: '500', color: theme.text };
      case 'h2':
        return { fontFamily: 'Georgia', fontSize: 19, color: theme.text };
      case 'h3':
        return { fontSize: 17, fontWeight: '500', color: theme.text };
      case 'bodyItalic':
        return { fontFamily: 'Georgia', fontSize: 13.5, fontStyle: 'italic', lineHeight: 23, color: '#2C1A08' };
      case 'caption':
        return { fontSize: 11, color: theme.textSecondary };
      case 'label':
        return { fontSize: 10, letterSpacing: 0.8, fontWeight: '600', color: theme.textTertiary, textTransform: 'uppercase' };
      case 'body':
      default:
        return { fontSize: 13, lineHeight: 20, color: theme.textSecondary };
    }
  };

  return (
    <Text style={[getVariantStyles(), color ? { color } : {}, style]} {...props}>
      {children}
    </Text>
  );
};
