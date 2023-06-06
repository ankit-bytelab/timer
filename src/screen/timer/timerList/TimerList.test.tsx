import React from 'react';
import {fireEvent, render, screen} from '../../../setup/test';
import TimerList from './TimerList';
import {NavigationNames} from '../../../utils/routeNames';

const mockNavigate = jest.fn();
const mockNavigation = {navigate: mockNavigate};

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mockNavigation,
}));

describe('TimerList page test', () => {
  it('should render', () => {
    render(<TimerList />);
  });

  it('should render add button and enable', () => {
    render(<TimerList />);
    const addButton = screen.getByTestId('add-new-button');
    expect(addButton).not.toBeNull();
  });

  it('should render empty container', () => {
    render(<TimerList />);
    expect(screen.getByTestId('empty-clock-svg')).not.toBeNull();
    expect(screen.getByText('No countdown available')).not.toBeNull();
  });
});

describe('TimerList positive flow', () => {
  it('should navigate to add timer page when user clicks on add button', () => {
    render(<TimerList />);
    const addButton = screen.getByTestId('add-new-button');
    fireEvent.press(addButton);

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith(NavigationNames.addTimer, {
      addNewTimerInList: expect.any(Function),
    });
  });
});
