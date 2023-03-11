import React from 'react';
import { RouterProvider } from 'react-router-dom/dist';
import './App.scss';
import { Provider } from 'react-redux';
import router from './router/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/index';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './themes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
