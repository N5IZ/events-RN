import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import TicketScreen from '../screens/TicketScreen';

const RootStack = createNativeStackNavigator();

const index = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Homescreen} />
        <RootStack.Screen name="Tickets" component={TicketScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default index;
