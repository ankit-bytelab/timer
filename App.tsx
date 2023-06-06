import React from 'react';
import Routes from './src/setup/routes/route';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const App: React.FC = (): JSX.Element => {
  return <Routes />;
};

export default App;
