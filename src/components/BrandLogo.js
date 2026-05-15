import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const BrandLogo = ({ size = 120, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: size, height: size, resizeMode: 'contain' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default BrandLogo;
