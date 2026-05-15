import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import BrandLogo from '../components/BrandLogo';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <BrandLogo size={150} />
        <Text style={styles.welcomeText}>Bienvenido a la App</Text>
        
        <CustomButton 
          title="CERRAR SESIÓN" 
          onPress={() => navigation.replace('Auth')} 
          type="secondary"
          style={styles.logoutButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginTop: theme.spacing.xl,
  },
  logoutButton: {
    marginTop: theme.spacing.xxl,
    width: '60%',
  },
});

export default HomeScreen;
