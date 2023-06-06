import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationNames} from '../../../utils/routeNames';
import {WorldClock} from '../../../screen';
import TimerStack from '../stacks/timer';
import {Clock, WorldClock as WorldClockIcon} from '../../../assets/svg';
import {BottomTabNavigatorParamList} from '../routes.types';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{headerShown: false, tabBarActiveTintColor: 'blueviolet'}}>
      <Tab.Screen
        name={NavigationNames.timer}
        component={TimerStack}
        options={{
          tabBarIcon: ({color, size}) => <Clock width={size} fill={color} />,
        }}
      />
      <Tab.Screen
        name={NavigationNames.worldClock}
        component={WorldClock}
        options={{
          tabBarIcon: ({color, size}) => (
            <WorldClockIcon width={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
