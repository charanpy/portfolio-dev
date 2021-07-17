import { useState } from 'react';

const useModal = (initialState = false) => {
  const [open, setOpen] = useState(initialState);
  console.log(open);
  const toggleModal = () => {
    console.log(open);
    setOpen((modal) => !modal);
    console.log(open);
  };

  return [open, setOpen];
};

export default useModal;
