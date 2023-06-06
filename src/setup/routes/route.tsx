import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './bottom/bottomNavigation';
import React from 'react';

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default Routes;
