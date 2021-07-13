import React from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { light as lightTheme, dark as darkTheme } from '../utils/theme';

export const ThemeContext = React.createContext({
  theme: false,
  toggleTheme: () => {},
});

const CustomThemeProvider = ({ children }) => {
  const customTheme = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = customTheme.value ? darkTheme : lightTheme;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    customTheme.toggle();
    console.log('theme', customTheme);
  };

  const body = (
    <ThemeContext.Provider value={{ theme: customTheme.value, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default CustomThemeProvider;
