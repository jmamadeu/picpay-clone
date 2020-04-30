import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

interface Props {
  onPress: () => {};
  focused: any;
}

const PayButton: React.FC<Props> = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={!focused ? ['#00f6c6', '#00ac4a'] : ['#fff', '#ccc']}
        start={[1, 0.2]}>
        <MaterialIcons
          name='attach-money'
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
};
export default PayButton;
