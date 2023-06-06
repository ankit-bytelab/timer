import React, {useCallback, useState} from 'react';
import {
  StyledAddButton,
  StyledAddButtonText,
  StyledAddTitleText,
  StyledInput,
  StyledInputRowView,
  StyledSafeAreaView,
} from './AddTimer.styles';
import {AddTimerScreenRouteProp, Timer} from './AddTimer.types';
import {useNavigation, useRoute} from '@react-navigation/native';

const AddTimer: React.FC = () => {
  const {params} = useRoute<AddTimerScreenRouteProp>();
  const navigation = useNavigation();
  const [time, setTime] = useState<Timer | undefined>();
  const isAddCounterEnabled =
    time && Object.values(time).some(value => !!value);

  const onAddTime = useCallback((): void => {
    if (!isAddCounterEnabled) {
      return;
    }
    const seconds =
      Number(time.hh ?? 0) * 60 * 60 +
      Number(time.mm ?? 0) * 60 +
      Number(time.ss ?? 0);
    params?.addNewTimerInList(seconds);
    navigation.goBack();
  }, [isAddCounterEnabled, params, time, navigation]);
  return (
    <StyledSafeAreaView>
      <StyledAddTitleText>Add Countdown Time</StyledAddTitleText>
      <StyledInputRowView>
        <StyledInput
          placeholder="HH"
          value={time?.hh}
          onChangeText={hh => setTime({...time, hh: hh})}
          keyboardType="numeric"
          returnKeyType="done"
        />
        <StyledInput
          placeholder="MM"
          value={time?.mm}
          onChangeText={mm => setTime({...time, mm: mm})}
          keyboardType="numeric"
          returnKeyType="done"
        />
        <StyledInput
          placeholder="SS"
          value={time?.ss}
          onChangeText={ss => setTime({...time, ss: ss})}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </StyledInputRowView>
      <StyledAddButton
        disabled={!isAddCounterEnabled}
        activeOpacity={0.7}
        testID="add-countdown-button"
        onPress={onAddTime}>
        <StyledAddButtonText>Add Countdown</StyledAddButtonText>
      </StyledAddButton>
    </StyledSafeAreaView>
  );
};

export default AddTimer;
