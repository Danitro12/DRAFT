import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, TiltNeon_400Regular } from '@expo-google-fonts/tilt-neon';
import { Archivo_900Black } from '@expo-google-fonts/archivo';
import RootNavigator from './src/navigation';

// Mantener la pantalla de carga visible mientras cargamos recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'TiltNeon-Regular': TiltNeon_400Regular,
    'Archivo-Black': Archivo_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <RootNavigator />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
