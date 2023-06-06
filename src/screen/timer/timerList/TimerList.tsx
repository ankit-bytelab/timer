import React from 'react';
import {FlatList} from 'react-native';
import {
  StyledEmptyView,
  StyledFloatingBotton,
  StyledPlusText,
  StyledSafeAreaView,
  StyledEmptyText,
} from './TimerList.styles';
import {CountDown} from '../../../components';
import {useCallback, useState} from 'react';
import {CountDownProps} from '../../../components/countDown/CountDown.types';
import {useNavigation} from '@react-navigation/native';
import {NavigationNames} from '../../../utils/routeNames';
import {EmptyList} from '../../../assets/svg';
import {TimerScreenNavigationProp} from './TimerList.types';

const TimerList: React.FC = () => {
  const navigation = useNavigation<TimerScreenNavigationProp>();
  const [countDownList, setCountDownList] = useState<CountDownProps[]>([]);

  const addNewTimerInList = useCallback(
    (timer: CountDownProps['seconds']): void => {
      setCountDownList(perState => [
        ...perState,
        {id: perState.length, seconds: timer},
      ]);
    },
    [setCountDownList],
  );

  const onAddButtonClick = useCallback(() => {
    navigation.navigate(NavigationNames.addTimer, {
      addNewTimerInList,
    });
  }, [navigation, addNewTimerInList]);

  const removeTimeFromList = useCallback(
    (index: number): void => {
      countDownList.splice(index, 1);
      setCountDownList([...countDownList]);
    },
    [countDownList, setCountDownList],
  );

  return (
    <StyledSafeAreaView>
      <FlatList
        data={countDownList}
        renderItem={({item, index}) => (
          <CountDown {...item} onRightSwipe={() => removeTimeFromList(index)} />
        )}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={() => (
          <StyledEmptyView>
            <EmptyList width={200} height={200} testID="empty-clock-svg" />
            <StyledEmptyText>No countdown available</StyledEmptyText>
          </StyledEmptyView>
        )}
      />
      <StyledFloatingBotton
        testID="add-new-button"
        activeOpacity={0.7}
        onPress={onAddButtonClick}>
        <StyledPlusText>+</StyledPlusText>
      </StyledFloatingBotton>
    </StyledSafeAreaView>
  );
};

export default TimerList;
