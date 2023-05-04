import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyles } from './ui/GlobalStyles';
import { AppContextProvider } from 'context/AppContext/AppContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AppContextProvider>
    <GlobalStyles />
    <App />
  </AppContextProvider>
);
