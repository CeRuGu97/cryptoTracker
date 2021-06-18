import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';
import Colors from '../../res/colors';
import FavoriteDetailScreen from '../FavDetail/FavoriteDetailScreen';

const Stack = createStackNavigator();

const FavoritesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: Colors.blackPearl,
                    shadowOpacity: 0,
                    shadowColor: Colors.blackPearl,
                    //este estilo es del head pusimos un color nefro y abajo se veia una line que tembien ahoa es de negro
                },
                headerTintColor: Colors.white,
            }}
        >
            <Stack.Screen name='Favorites' component={FavoritesScreen}/>
            <Stack.Screen name="FavoritesDetail" component={FavoriteDetailScreen} />
        </Stack.Navigator>
    );
}
export default FavoritesStack;
