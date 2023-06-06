import {createStackNavigator} from '@react-navigation/stack';
import {TimerList, AddTimer} from '../../../screen';
import {NavigationNames} from '../../../utils/routeNames';
import React from 'react';
import {TimeStackNavigatorParamList} from '../routes.types';

const Stack = createStackNavigator<TimeStackNavigatorParamList>();
const TimerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationNames.timerList} component={TimerList} />
      <Stack.Screen name={NavigationNames.addTimer} component={AddTimer} />
    </Stack.Navigator>
  );
};

export default TimerStack;
