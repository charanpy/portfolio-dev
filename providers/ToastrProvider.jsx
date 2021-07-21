import { createContext, useCallback, useState, useEffect } from 'react';

const defaultAlert = {
  open: false,
  title: '',
  variant: 'success',
};

export const ToastrContext = createContext({
  ...defaultAlert,
  openAlert: () => {},
  closeAlert: () => {},
});

const ToastrProvider = ({ children }) => {
  const [alert, setAlert] = useState(defaultAlert);
  const { open } = alert;
  const closeAlert = useCallback(() => {
    setAlert((prevState) => ({
      ...prevState,
      ...defaultAlert,
    }));
  }, [setAlert]);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      closeAlert();
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [open, closeAlert]);
  const openAlert = ({ open = true, variant = 'error', title }) => {
    const alert = { open, variant, title };
    console.log(alert);
    setAlert((prevState) => ({
      ...prevState,
      ...alert,
    }));
  };

  const value = { ...alert, openAlert, closeAlert };
  return (
    <ToastrContext.Provider value={value}>{children}</ToastrContext.Provider>
  );
};

export default ToastrProvider;
