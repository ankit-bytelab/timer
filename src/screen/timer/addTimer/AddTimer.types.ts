import {RouteProp} from '@react-navigation/native';
import {TimeStackNavigatorParamList} from '../../../setup/routes/routes.types';
import {NavigationNames} from '../../../utils/routeNames';

export interface Timer {
  hh?: string;
  mm?: string;
  ss?: string;
}

export type AddTimerScreenRouteProp = RouteProp<
  TimeStackNavigatorParamList,
  NavigationNames.addTimer
>;
