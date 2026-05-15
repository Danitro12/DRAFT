import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

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
      <Text
        style={[
          styles.text,
          isPrimary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: theme.spacing.s,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
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
