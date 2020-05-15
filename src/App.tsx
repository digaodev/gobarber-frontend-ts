import React from 'react';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
};

export default App;
