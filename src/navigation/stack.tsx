import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding} from '../views/Onboarding';
import { BottomNavigator } from './bottom';
const Stack = createStackNavigator();

export const StackNavigator =() =>{
    return (
        <Stack.Navigator>
         <Stack.Screen 
         options ={{
            headerShown: false,
         }}
         name="Onboarding"
         component={Onboarding}
         />
        <Stack.Screen 
         options ={{
            headerShown: false,
         }}
         name="BottomNavigator"
         component={BottomNavigator}
         />
        </Stack.Navigator>
    );
};
