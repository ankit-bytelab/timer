import React from 'react';
import CountDown from './CountDown';
import {act, fireEvent, render, screen, waitFor} from '../../setup/test';

const mockSeconds = 10;
const mockOnRightSwipe = jest.fn();

jest.mock('react-native-background-timer', () => {
  const timer = {
    timeoutIds: [] as number[],
    setInterval: jest.fn((fn: () => void, interval: number) => {
      const timeoutId = setTimeout(() => {
        timer.timeoutIds = timer.timeoutIds.filter(id => id !== timeoutId);
        fn();
      }, interval);
      timer.timeoutIds.push(timeoutId);
      return timeoutId;
    }),
    clearInterval: jest.fn((timeoutId: number) => {
      clearTimeout(timeoutId);
      timer.timeoutIds = timer.timeoutIds.filter(id => id !== timeoutId);
    }),
    clearAllTimeouts: jest.fn(() => {
      timer.timeoutIds.forEach(id => clearTimeout(id));
      timer.timeoutIds = [];
    }),
  };

  return timer;
});

describe('CountDown component', () => {
  it('renders count and play/pause button', () => {
    render(
      <CountDown
        id={1}
        seconds={mockSeconds}
        onRightSwipe={mockOnRightSwipe}
      />,
    );

    const countText = screen.getByText('00:10');
    expect(countText).not.toBeNull();

    const playPauseButton = screen.getByTestId('play-pause-button');
    expect(playPauseButton).not.toBeNull();
  });

  it('starts and stops the count down', () => {
    jest.useFakeTimers();

    render(
      <CountDown
        id={1}
        seconds={mockSeconds}
        onRightSwipe={mockOnRightSwipe}
      />,
    );

    const playPauseButton = screen.getByTestId('play-pause-button');
    act(() => {
      fireEvent.press(playPauseButton);
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('00:09')).not.toBeNull();
    act(() => {
      fireEvent.press(playPauseButton);
    });
    jest.useRealTimers();
  });

  it('triggers right swipe action', () => {
    render(
      <CountDown
        id={1}
        seconds={mockSeconds}
        onRightSwipe={mockOnRightSwipe}
      />,
    );

    const swipeableContainer = screen.getByTestId('swipeable-container');

    act(() => {
      fireEvent(swipeableContainer, 'onSwipeableOpen');
    });

    expect(mockOnRightSwipe).toHaveBeenCalledTimes(1);
    expect(mockOnRightSwipe).toHaveBeenCalledWith(1);
  });

  it('stops count down when reaching zero', () => {
    render(<CountDown id={1} seconds={2} />);
    const countText = screen.getByText('00:02');
    expect(countText).toBeTruthy();
    const playPauseButton = screen.getByTestId('play-pause-button');
    act(() => {
      fireEvent.press(playPauseButton);
    });

    waitFor(
      () => {
        const finishedCountText = screen.queryByText('00:00');
        expect(finishedCountText).toBeFalsy();
      },
      {timeout: 2000},
    );
  });
});
