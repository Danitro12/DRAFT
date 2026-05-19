import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { 
  Defs, 
  Text as SvgText, 
  Filter, 
  FeGaussianBlur, 
  FeMerge, 
  FeMergeNode 
} from 'react-native-svg';
import { theme } from '../theme';

/**
 * Componente para títulos con efecto neón SVG real.
 */
const NeonTitle = ({ 
  text = "BIENVENIDO A DRAFT", 
  coreColor = theme.colors.white, 
  glowColor = theme.colors.purple, 
  fontSize = 25,
  width = "100%",
  style 
}) => {
  return (
    <View style={[styles.container, style]}>
      <Svg height={fontSize * 2.5} width={width}>
        <Defs>
          {/* Filtro dinámico de neón */}
          <Filter id="neonGlowTitle" x="-50%" y="-50%" width="200%" height="200%">
            <FeGaussianBlur stdDeviation={fontSize * 0.1} result="blur" />
            <FeMerge>
              <FeMergeNode in="blur" />
              <FeMergeNode in="blur" />
              <FeMergeNode in="SourceGraphic" />
            </FeMerge>
          </Filter>
        </Defs>
        
        {/* 1. CAPA DE BRILLO (Color de resplandor con filtro) */}
        <SvgText
          fill="none"
          stroke={glowColor}
          strokeWidth="1.2"
          fontSize={fontSize}
          fontFamily="Archivo-Black"
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          filter="url(#neonGlowTitle)"
          opacity={0.8}
        >
          {text}
        </SvgText>

        {/* 2. CAPA DE NÚCLEO (Color central nítido) */}
        <SvgText
          fill="none"
          stroke={coreColor}
          strokeWidth="0.5"
          fontSize={fontSize}
          fontFamily="Archivo-Black"
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NeonTitle;
