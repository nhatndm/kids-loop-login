import { createContext } from 'react';
import { Theme } from '../Theme/interface';

interface IAppContext {
  loading: boolean;
  theme: Theme;
  setTheme: (them: Theme) => void;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<IAppContext | null>(null);
const AppProvider = AppContext.Provider;
const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
