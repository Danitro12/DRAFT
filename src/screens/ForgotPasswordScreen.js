import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Platform, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import BrandLogo from '../components/BrandLogo';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
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

  const handleResetPassword = () => {
    // Mock reset logic
    console.log('Resetting password for:', email);
    Alert.alert(
      'Correo enviado',
      'Si el correo existe en nuestro sistema, recibirás instrucciones para restablecer tu contraseña.',
      [{ text: 'Volver al Login', onPress: () => navigation.navigate('Login') }]
    );
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
          <BrandLogo style={styles.logo} size={80} />
          <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
          <Text style={styles.subtitle}>
            Introduce tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
          </Text>

          <View style={styles.form}>
            <CustomInput
              label="EMAIL"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomButton 
              title="ENVIAR INSTRUCCIONES" 
              onPress={handleResetPassword} 
              style={{ marginTop: theme.spacing.m }}
            />

            <CustomButton 
              title="VOLVER AL LOGIN" 
              onPress={() => navigation.navigate('Login')} 
              type="secondary"
            />
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
    paddingVertical: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
  },
  form: {
    width: '100%',
  },
});

export default ForgotPasswordScreen;
