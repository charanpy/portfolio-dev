import { createContext, useState } from 'react';

export const ModalContext = createContext({
  open: false,
  setOpen: () => {},
});

const AlertProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const setOpen = () => {
    setModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ modal, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default AlertProvider;
