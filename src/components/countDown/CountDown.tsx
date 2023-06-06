import React, {useEffect, useRef, useState} from 'react';
import {
  StyledContainer,
  StyledCountText,
  StyledDeleteText,
  StyledPlayPauseButton,
  StyledSwipeableContainer,
} from './CountDown.styles';
import {CountDownProps} from './CountDown.types';
import {convertSecondsToTime} from '../../utils/functions/timeConverter';
import {Swipeable} from 'react-native-gesture-handler';
import {Pause, Play} from '../../assets/svg';

const RenderSwipeableAction: React.FC = () => {
  return (
    <StyledSwipeableContainer>
      <StyledDeleteText>Delete</StyledDeleteText>
    </StyledSwipeableContainer>
  );
};
const CountDown: React.FC<CountDownProps> = ({id, seconds, onRightSwipe}) => {
  const [count, setCount] = useState(seconds);
  const [isPause, setIsPause] = useState<boolean>(true);
  const [isCountDownFinish, setIsCountDownFinish] = useState<boolean>(false);
  const intervalref = useRef<number | null>(null);

  const startInterval = (): void => {
    intervalref.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    setIsPause(false);
  };

  const stopInterval = (): void => {
    if (intervalref.current) {
      clearInterval(intervalref.current);
      intervalref.current = null;
      setIsPause(true);
    }
  };

  useEffect(() => {
    if (count <= 0) {
      setIsCountDownFinish(true);
      stopInterval();
    }
  }, [count]);

  useEffect(() => {
    return () => stopInterval();
  }, []);

  return (
    <Swipeable
      testID="swipeable-container"
      renderRightActions={RenderSwipeableAction}
      onSwipeableOpen={() => {
        if (onRightSwipe) {
          stopInterval();
          onRightSwipe(id);
        }
      }}
      rightThreshold={100}>
      <StyledContainer>
        <StyledCountText>{convertSecondsToTime(count)}</StyledCountText>
        {!isCountDownFinish && (
          <StyledPlayPauseButton
            activeOpacity={0.7}
            testID="play-pause-button"
            onPress={() => (isPause ? startInterval() : stopInterval())}>
            {isPause ? <Play /> : <Pause />}
          </StyledPlayPauseButton>
        )}
      </StyledContainer>
    </Swipeable>
  );
};

export default CountDown;
