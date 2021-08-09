import React from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { light as lightTheme, dark as darkTheme } from '../utils/theme';

export const ThemeContext = React.createContext({
  theme: false,
  toggleTheme: () => {},
});

const CustomThemeProvider = ({ children }) => {
  const customTheme = useDarkMode(true, { storageKey: null, onChange: null });
  const theme = customTheme.value ? darkTheme : lightTheme;
  const [mounted, setMounted] = React.useState(false);
  console.log(customTheme, 22);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const toggleTheme = (click = false) => {
    if (click)
      localStorage.setItem(
        'portfolio-theme',
        JSON.stringify({ theme: !customTheme.value })
      );
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
