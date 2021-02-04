import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

// INTERFACE
import { Theme } from './Theme/interface';

// THEME
import theme from './Theme';

// APP CONTEXT
import { AppProvider } from './Context';

// APP STYLE
import { AppStyle } from './App.style';

// COMPONENT
import SignIn from './Pages/SignIn';
import Spin from './Components/Spin';

interface AppState {
  theme: Theme;
  loading: boolean;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    theme: theme.default,
    loading: false,
  });

  const setTheme = (theme: Theme): void =>
    setAppState({ ...appState, theme: theme });

  const setLoading = (loading: boolean): void =>
    setAppState({ ...appState, loading: loading });

  return (
    <AppProvider
      value={{
        theme: appState.theme,
        loading: appState.loading,
        setTheme,
        setLoading,
      }}
    >
      <ThemeProvider theme={appState.theme}>
        <AppStyle>
          {appState.loading && <Spin />}
          <SignIn />
        </AppStyle>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
