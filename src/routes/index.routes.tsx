import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './app.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
