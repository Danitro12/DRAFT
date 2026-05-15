import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Componente para renderizar texto con efecto neón y doble capa de brillo.
 */
const NeonText = ({ children, color, style, ...props }) => {
  const neonColor = color || theme.colors.davincci.cyan;

  const neonStyle = {
    color: neonColor,
    textShadowColor: neonColor,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  };

  return (
    <View style={styles.container}>
      {/* Capa de brillo extra (Duplicada para intensidad) */}
      <Text
        style={[style, neonStyle, styles.glowLayer]}
        {...props}
      >
        {children}
      </Text>
      {/* Capa base */}
      <Text style={[style, neonStyle]} {...props}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  glowLayer: {
    position: 'absolute',
    opacity: 0.7,
    left: 0,
    right: 0,
  },
});

export default NeonText;
