import React from 'react';
import {BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import TicketScreen from '../screens/TicketScreen';

import { Pressable } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootTabNavigator';

export type RootTabParamList = {
    Home: undefined;
    Tickets: undefined;
  };

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;


function BottomTabNavigator() {

  return (
    <Tab.Navigator initialRouteName="Home"   
    // screenOptions={{
          //     tabBarActiveTintColor: Colors[colorScheme].tint,
          //   }}
           >
          
          <Tab.Screen
              name="Home"
              component={Homescreen}
              options={({ navigation }: RootTabScreenProps<'Home'>) => ({
                  title: 'Home',
                  tabBarIcon: ({ color }) => <TabBarIcon name="h" color={color} />,
                  headerRight: () => (
                      <Pressable
                          onPress={() => console.log("sup")}
                          style={({ pressed }) => ({
                              opacity: pressed ? 0.5 : 1,
                          })}>
                          <FontAwesome
                              name="info-circle"
                              size={25}
                              color={"color goes here"}
                              style={{ marginRight: 15 }} />
                      </Pressable>
                  ),
              })} /><Tab.Screen
              name="Tickets"
              component={TicketScreen}
              options={{
                  title: 'Tickets',
                  tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }} />
    </ Tab.Navigator>
}
export default BottomTabNavigator;
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
