import {CountDownProps} from '../../components/countDown/CountDown.types';
import {NavigationNames} from '../../utils/routeNames';

export type TimeStackNavigatorParamList = {
  [NavigationNames.timerList]: undefined;
  [NavigationNames.addTimer]: {
    addNewTimerInList: (timer: CountDownProps['seconds']) => void;
  };
};

export type BottomTabNavigatorParamList = {
  [NavigationNames.timer]: TimeStackNavigatorParamList;
  [NavigationNames.worldClock]: undefined;
};
