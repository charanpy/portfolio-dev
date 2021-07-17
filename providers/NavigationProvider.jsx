import { createContext, useState, useEffect } from 'react';

export const NavigationContext = createContext({
  path: '',
  setPathName: () => {},
});

const NavigationProvider = ({ children }) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    if (typeof window !== undefined) {
      const hash = window.location.hash;
      const path = window.location.pathname;
      setPath(hash || path);
    }
  }, []);

  const setPathName = (path) => setPath(path);

  return (
    <NavigationContext.Provider value={{ path, setPathName }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
