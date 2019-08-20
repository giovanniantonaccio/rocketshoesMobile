import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
}
