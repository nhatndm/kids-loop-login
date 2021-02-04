import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

// INTERFACE
import { Theme } from './Theme/interface';

// THEME
import theme from './Theme';

// APP CONTEXT
import { AppProvider } from './Context';

// APP STYLE
import { AppStyle } from './App.style';

// PAGES
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';

// COMPONENT
import Spin from './Components/Spin';

// APP ROUTE
import { AppRoute } from './Constant';

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

          <BrowserRouter>
            <Switch>
              <Route exact path={AppRoute.Main} component={SignIn} />
              <Route path={AppRoute.SignUp} component={SignUp} />
              <Route
                path={AppRoute.ForgotPassword}
                component={ForgotPassword}
              />
            </Switch>
          </BrowserRouter>
        </AppStyle>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
