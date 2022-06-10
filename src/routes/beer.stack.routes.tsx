import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BeerDetails } from '@screens/BeerDetails';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();


export function BeerStackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="BeerDetails" component={BeerDetails } />
        </Navigator>
    );
}