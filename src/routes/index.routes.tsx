import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './app.routes';

export default function Routes() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
}
