import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { BeerFilterProvider } from '@hooks/advanced-filter';
import { View } from 'react-native';
import { Home } from '@screens/Home';

export default function App() {
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemeProvider theme={theme} >
        <BeerFilterProvider>
          <StatusBar barStyle={"light-content"} translucent backgroundColor='transparent' />
          <Home />
        </BeerFilterProvider>
      </ThemeProvider>
    </View>
  );
}
