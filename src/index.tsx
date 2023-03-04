import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './ui/globalStyles';
import { AppContextProvider } from 'context/AppContext/AppContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <GlobalStyles />
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </>
);
