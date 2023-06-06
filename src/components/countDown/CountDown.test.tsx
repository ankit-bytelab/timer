import React from 'react';
import CountDown from './CountDown';
import {act, fireEvent, render, screen} from '../../setup/test';
const mockSeconds = 10;
const mockOnRightSwipe = jest.fn();

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
      jest.advanceTimersByTime(10000);
    });
    expect(screen.getByText('00:00')).not.toBeNull();
    jest.useRealTimers();
  });
});
