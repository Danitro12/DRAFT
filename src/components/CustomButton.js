import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import NeonText from './NeonText';
const CustomButton = ({ title, onPress, type = 'primary', style }) => {
  const isPrimary = type === 'primary';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <NeonText
        color={theme.colors.purple}
        style={styles.text}
      >
        {title}
      </NeonText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: theme.spacing.s,
    borderWidth: 0.2,
    borderColor: theme.colors.purple,
  },
  primaryButton: {
    // Efecto de Brillo Neón
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.purple,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 8, // Sombra para Android
  },
  secondaryButton: {
    backgroundColor: 'transparent',
  },
  text: {
    ...theme.typography.button,
  },
  primaryText: {
    color: theme.colors.white,
  },
  secondaryText: {
    color: theme.colors.primary,
    textTransform: 'none',
  },
});

export default CustomButton;
