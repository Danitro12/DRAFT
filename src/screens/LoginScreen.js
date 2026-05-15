import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import BrandLogo from '../components/BrandLogo';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
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

  const handleLogin = () => {
    // Mock login logic
    console.log('Logging in with:', email, password);
    navigation.replace('App');
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
            <BrandLogo style={styles.logo} size={100} />
            <Text style={styles.title}>Bienvenido a DRYFT</Text>
            <Text style={styles.subtitle}>
              Redefine tu trayectoria. Velocidad, precisión y estilo en cada kilómetro.
            </Text>
          </View>

          <View style={styles.form}>
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

            <TouchableOpacity 
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <CustomButton 
              title="INICIAR SESIÓN" 
              onPress={handleLogin} 
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.linkText}>Crea una</Text>
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
    paddingVertical: theme.spacing.xxl,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.m,
  },
  form: {
    width: '100%',
    marginVertical: theme.spacing.xl,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing.l,
  },
  forgotPasswordText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    textDecorationLine: 'underline',
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

export default LoginScreen;
