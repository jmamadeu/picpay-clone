import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from '../pages/Home';
import WalletScreen from '../pages/Wallet';
import PayScreen from '../pages/Pay';
import PayButton from '../components/PayButton';

const Tabs = createBottomTabNavigator();

export interface IIConTypes {
  lib: any;
  name: string;
}

export interface IICon {
  [propName: string]: IIConTypes;
}

const TabsNavigation: React.FC = () => {
  let icons: IICon = {
    Home: {
      lib: AntDesign,
      name: 'home',
    },
    Wallet: {
      lib: AntDesign,
      name: 'creditcard',
    },
    Notifications: {
      lib: Ionicons,
      name: 'ios-notifications-outline',
    },
    Definitions: {
      lib: AntDesign,
      name: 'setting',
    },
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ size, color, focused }) => {
          if (route.name === 'Pay')
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          const { lib: Ico, name } = icons[route.name];

          return <Ico name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}>
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Início',
        }}
      />
      <Tabs.Screen
        name='Wallet'
        component={WalletScreen}
        options={{ title: 'Carteira' }}
      />

      <Tabs.Screen name='Pay' component={PayScreen} options={{ title: '' }} />

      <Tabs.Screen
        name='Notifications'
        component={PayScreen}
        options={{ title: 'Notificações' }}
      />
      <Tabs.Screen
        name='Definitions'
        component={PayScreen}
        options={{ title: 'Definições' }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
