import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform, KeyboardAvoidingView, ScrollView, Keyboard, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import BrandLogo from '../components/BrandLogo';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import NeonText from '../components/NeonText';
import NeonTitle from '../components/NeonTitle';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleRegister = () => {
    // Mock registration logic
    console.log('Registering with:', name, email);
    Alert.alert('Registro exitoso', 'Se ha registrado correctamente.', [
      { text: 'OK', onPress: () => navigation.navigate('Login', { direction: 'fromRight' }) }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          scrollEnabled={isKeyboardVisible}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.header}>
            <BrandLogo style={styles.logo} size={80} />
            <NeonTitle text="Crear cuenta" fontSize={25} style={{ marginBottom: theme.spacing.s }} />
            <Text style={styles.subtitle}>
              Únete a la comunidad DRYFT y comienza tu viaje hoy mismo.
            </Text>
          </View>

          <View style={styles.form}>
            <CustomInput
              label="NOMBRE COMPLETO"
              placeholder="Juan Pérez"
              value={name}
              onChangeText={setName}
            />
            <CustomInput
              label="EMAIL"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <CustomInput
              label="CONTRASEÑA"
              placeholder="********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <CustomButton
              title="REGISTRARSE"
              onPress={handleRegister}
              style={{ marginTop: theme.spacing.s }}
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>¿Ya tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login', { direction: 'fromRight' })}>
              <NeonText>Inicia sesión</NeonText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.l,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    marginBottom: theme.spacing.s,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginVertical: theme.spacing.m,
  },
  footer: {
    flexDirection: 'row',
    paddingBottom: theme.spacing.m,
  },
  footerText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  linkText: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: '700',
  },
});

export default RegisterScreen;
