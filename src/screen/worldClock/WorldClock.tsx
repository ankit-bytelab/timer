import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  StyledButtonRowView,
  StyledButtonText,
  StyledSafeAreaView,
  StyledTimeZoneButton,
  StyledWorldClockText,
} from './WorldClock.styles';
import {WorldClock as WorldClockIcon} from '../../assets/svg';
import {WorldTimeZones} from './WorldClock.types';
import BackgroundTimer from 'react-native-background-timer';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const WorldClock: React.FC = () => {
  const intervalRef = useRef<number | null>(null);
  const [worldTime, setWorldTime] = useState<Date>(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    WorldTimeZones.IST,
  );

  useEffect(() => {
    getTimeForTimeZone(selectedTimeZone);
    return () => {
      stopTimer();
    };
  }, [selectedTimeZone]);

  const handleTimeZoneSelect = useCallback(
    (timeZone: string): void => {
      if (selectedTimeZone !== timeZone) {
        setSelectedTimeZone(timeZone);
      }
    },
    [setSelectedTimeZone, selectedTimeZone],
  );

  const getTimeForTimeZone = async (timeZone: string) => {
    try {
      const response = await fetch(
        `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
      );
      const data = await response.json();
      if (response.ok) {
        const internetTime = data.dateTime;
        setWorldTime(new Date(internetTime));
        stopTimer();
        startTimer();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addOneSecond = useCallback((date: Date): Date => {
    const newDate = new Date(date.getTime() + 1000);
    return newDate;
  }, []);

  const startTimer = useCallback((): void => {
    intervalRef.current = BackgroundTimer.setInterval(() => {
      setWorldTime(prevTime => addOneSecond(prevTime));
    }, 1000);
  }, [intervalRef, setWorldTime]);

  const stopTimer = useCallback((): void => {
    if (intervalRef.current) {
      BackgroundTimer.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [intervalRef]);

  return (
    <StyledSafeAreaView>
      <WorldClockIcon
        testID="world-icon"
        width={width}
        height={height / 4}
        fill="#8A2BE2"
      />
      {worldTime && (
        <StyledWorldClockText>
          {moment(worldTime).format('DD-MM-YYYY HH:mm:ss')}
        </StyledWorldClockText>
      )}
      <StyledButtonRowView>
        <StyledTimeZoneButton
          isActive={selectedTimeZone === WorldTimeZones.IST}
          onPress={() => handleTimeZoneSelect(WorldTimeZones.IST)}>
          <StyledButtonText>IST</StyledButtonText>
        </StyledTimeZoneButton>
        <StyledTimeZoneButton
          isActive={selectedTimeZone === WorldTimeZones.PST}
          onPress={() => handleTimeZoneSelect(WorldTimeZones.PST)}>
          <StyledButtonText>PST</StyledButtonText>
        </StyledTimeZoneButton>
      </StyledButtonRowView>
    </StyledSafeAreaView>
  );
};

export default WorldClock;
