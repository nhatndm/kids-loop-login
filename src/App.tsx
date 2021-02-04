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

interface AppState {
  theme: Theme;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    theme: theme.default,
  });

  const setTheme = (theme: Theme): void =>
    setAppState({ ...appState, theme: theme });

  return (
    <AppProvider value={{ theme: appState.theme, setTheme }}>
      <ThemeProvider theme={appState.theme}>
        <AppStyle></AppStyle>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
