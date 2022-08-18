import React from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import TicketScreen from '../screens/TicketScreen';

import {Pressable, StyleSheet} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootTabNavigator';
import {FontAwesome} from '../Icon';

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
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 60,
          // elevation: 1,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={({navigation}: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size="small"
                color={'color goes here'}
                //   style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketScreen}
        options={{
          title: 'Tickets',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size="small" name={props.name} color={props.color} />;
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
