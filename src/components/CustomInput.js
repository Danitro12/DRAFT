import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../theme';

const CustomInput = ({ label, placeholder, secureTextEntry, value, onChangeText, keyboardType, autoCapitalize }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textSecondary}
          secureTextEntry={!!secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType || 'default'}
          autoCapitalize={autoCapitalize || 'none'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.m,
    width: '100%',
  },
  label: {
    ...theme.typography.label,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  inputContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.m,
  },
  input: {
    ...theme.typography.body,
    color: theme.colors.text,
    height: '100%',
  },
});

export default CustomInput;
