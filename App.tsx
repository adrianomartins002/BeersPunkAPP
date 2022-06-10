import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { BeerFilterProvider } from '@hooks/advanced-filter';
import { View } from 'react-native';
// import { Home } from '@screens/Home';
import { Routes } from '@routes/index';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  

  return (
      <ThemeProvider theme={theme} >
        <BeerFilterProvider>
          <StatusBar barStyle={"dark-content"} translucent backgroundColor='transparent' />
          {/* <Home /> */}
          <Routes />
        </BeerFilterProvider>
      </ThemeProvider>
  );
}
