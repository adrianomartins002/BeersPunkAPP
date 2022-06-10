import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BeerStackRoutes } from './beer.stack.routes';

export function Routes(){
    return(
        <NavigationContainer>
            <BeerStackRoutes />
        </NavigationContainer>
    );
}