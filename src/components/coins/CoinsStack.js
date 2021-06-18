/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../CoinDetail/CoinDetailScreen';
import Colors from '../../res/colors';

const Stack = createStackNavigator();
const CoinsStack = () => {
    // eslint-disable-next-line keyword-spacing
    return(
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
            <Stack.Screen name="Coins" component={CoinsScreen} />
            <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
        </Stack.Navigator>
      );
};

export default CoinsStack;
