import React from 'react'
import {
  useFonts,
  AverageSans_400Regular,
} from '@expo-google-fonts/average-sans'
import Routes from './src/routes'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    AverageSans_400Regular,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return <Routes />
}
