import { createContext } from 'react';
import { Theme } from '../Theme/interface';

interface IAppContext {
  theme: Theme;
  setTheme: (them: Theme) => void;
}

const AppContext = createContext<IAppContext | null>(null);
const AppProvider = AppContext.Provider;
const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
