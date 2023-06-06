import React from 'react';

import AddTimer from './AddTimer';
import {fireEvent, render, screen} from '../../../setup/test';

const mockGoBack = jest.fn();
const mockNavigation = {goBack: mockGoBack};

const mockAddNewTimerInList = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mockNavigation,
  useRoute: () => ({
    params: {
      addNewTimerInList: mockAddNewTimerInList,
    },
  }),
}));

describe('AddTimer check renders', () => {
  it('should render', () => {
    render(<AddTimer />);
  });

  it('should render title', () => {
    render(<AddTimer />);
    expect(screen.getByText('Add Countdown Time')).not.toBeNull();
  });

  it('should render all inputs', () => {
    render(<AddTimer />);
    expect(screen.getByPlaceholderText('HH')).not.toBeNull();
    expect(screen.getByPlaceholderText('MM')).not.toBeNull();
    expect(screen.getByPlaceholderText('SS')).not.toBeNull();
  });

  it('should render add countdown button', () => {
    render(<AddTimer />);
    const addCountDownButton = screen.getByTestId('add-countdown-button');
    expect(addCountDownButton).toBeTruthy();
  });
});

describe('AddTimer positive flow', () => {
  it('should enable the add countdown button when time is entered', () => {
    render(<AddTimer />);
    const addButton = screen.getByTestId('add-countdown-button');
    const hhInput = screen.getByPlaceholderText('HH');
    const mmInput = screen.getByPlaceholderText('MM');
    const ssInput = screen.getByPlaceholderText('SS');

    fireEvent.changeText(hhInput, '01');
    fireEvent.changeText(mmInput, '30');
    fireEvent.changeText(ssInput, '45');

    expect(addButton.props.disabled).toBeFalsy();
  });

  it('should navigate back and call params function when user fills in the values and clicks the button', () => {
    const {getByTestId} = render(<AddTimer />);
    const addButton = getByTestId('add-countdown-button');
    const hhInput = screen.getByPlaceholderText('HH');
    const mmInput = screen.getByPlaceholderText('MM');
    const ssInput = screen.getByPlaceholderText('SS');

    fireEvent.changeText(hhInput, '01');
    fireEvent.changeText(mmInput, '30');
    fireEvent.changeText(ssInput, '45');

    fireEvent.press(addButton);

    expect(addButton.props.disabled).toBeFalsy();
    expect(mockAddNewTimerInList).toHaveBeenCalledTimes(1);
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});
