import React from 'react';
import {fireEvent, render, screen, waitFor} from '../../setup/test';
import WorldClock from './WorldClock';

describe('WorldClock render checks', () => {
  it('should render', () => {
    render(<WorldClock />);
  });

  it('should render world icon', () => {
    render(<WorldClock />);
    expect(screen.getByTestId('world-icon')).toBeTruthy();
  });

  it('should display the world time when fetched successfully', async () => {
    jest.spyOn(globalThis as any, 'fetch').mockImplementationOnce(
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({dateTime: '2023-06-06T18:04:56'}),
        }) as any,
    );

    render(<WorldClock />);
    expect(screen.queryByText('06-06-2023 18:04:56')).toBeNull();

    await waitFor(() => {
      expect(screen.getByText('06-06-2023 18:04:56')).toBeDefined();
    });
  });

  it('should render IST timezone button', () => {
    render(<WorldClock />);
    const istButton = screen.getByText('IST');
    expect(istButton).toBeTruthy();
  });

  it('should render PST timezone button', () => {
    render(<WorldClock />);
    const pstButton = screen.getByText('PST');

    fireEvent.press(pstButton);

    expect(pstButton).toBeTruthy();
  });
});
