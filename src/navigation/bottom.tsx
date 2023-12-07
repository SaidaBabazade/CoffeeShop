import React from'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/Home';
import FavoriteScreen from '../views/FavoriteScreen';
import Basket from '../views/Basket';
import HomeIcon from '../assets/icons/Home.svg';





const Bottom =createBottomTabNavigator();

export const BottomNavigator =()=> {
    return(
<Bottom.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
    <Bottom.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => {
            return (
                <HomeIcon width={24} height={24}/>
            )
        }
    }} />
    <Bottom.Screen name="Favorite" component={FavoriteScreen} />
    <Bottom.Screen name="Basket" component={Basket} />

    
</Bottom.Navigator>
        );
    
};
  
