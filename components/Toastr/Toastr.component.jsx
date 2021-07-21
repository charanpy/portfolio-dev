import React, { useContext } from 'react';
import { ToastrContext } from '../../providers/ToastrProvider';
import CloseComponent from '../svg/Close/Close.component';
import { CloseContainer, ToastrContainer, ToastrData } from './Toastr.styled';

const ToastrComponent = () => {
  const { open, title, variant, closeAlert } = useContext(ToastrContext);
  return (
    <>
      {open ? (
        <ToastrContainer variant={variant}>
          <ToastrData>{title}</ToastrData>
          <CloseContainer onClick={closeAlert}>
            <CloseComponent />
          </CloseContainer>
        </ToastrContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default ToastrComponent;
