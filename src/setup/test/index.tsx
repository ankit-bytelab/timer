import {NavigationContainer} from '@react-navigation/native';
import {render, RenderOptions} from '@testing-library/react-native';
import React, {PropsWithChildren, ReactElement} from 'react';

const AllTheProviders: React.FC<PropsWithChildren> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, {
    wrapper: ({children}) => <AllTheProviders>{children}</AllTheProviders>,
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
