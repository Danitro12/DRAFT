import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Rect,
  Text as SvgText,
  Filter,
  FeGaussianBlur,
  FeMerge,
  FeMergeNode
} from 'react-native-svg';
import { theme } from '../theme';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import NeonText from '../components/NeonText';
import NeonTitle from '../components/NeonTitle';

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
            <View style={styles.mapContainer}>
              <Image
                source={require('../../assets/mapa.png')}
                style={styles.mapImage}
                blurRadius={Platform.OS === 'ios' ? 0 : 0}
              />
              <Svg height="100%" width="100%" style={styles.gradient}>
                <Defs>
                  <RadialGradient
                    id="grad"
                    cx="50%"
                    cy="50%"
                    rx="80%"
                    ry="80%"
                    fx="50%"
                    fy="50%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop offset="0%" stopColor={theme.colors.background} stopOpacity="0" />
                    <Stop offset="100%" stopColor={theme.colors.background} stopOpacity="1" />
                  </RadialGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
              </Svg>
            </View>
            <NeonTitle
              text="BIENVENIDO A DRAFT"
              style={{ marginBottom: theme.spacing.s }}
            />
            <Text style={styles.subtitle}>
              Elige tu forma de disfrutar
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
              <NeonText >Registrate</NeonText>
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
    paddingVertical: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'flex-end', // Empuja todo hacia el final
  },
  header: {
    alignItems: 'center',
    width: '100%',
    marginTop: 0, // Ajustamos para que la imagen empiece desde arriba
  },
  logo: {
    marginBottom: theme.spacing.xl,
  },
  mapContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
    marginBottom: theme.spacing.xl,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    opacity: 1, // Estética "lejana" y difuminada
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%', // Se desvanece desde arriba hacia el fondo
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.purple,
    textAlign: 'center',
    marginBottom: theme.spacing.s,
    fontFamily: 'TiltNeon-Regular', // Nueva tipografía neón
    // Efecto Neón mejorado para esta fuente
    textShadowColor: theme.colors.red_night,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.m,
    opacity: 0.8,
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing.xs,
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
});

export default LoginScreen;
