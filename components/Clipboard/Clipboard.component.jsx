import React, { useContext } from 'react';
import { ModalContext } from '../../providers/ModalProvider';
import Alert from '../Alert/Alert.container';
import CloseComponent from '../svg/Close/Close.component';
import TickComponent from '../svg/Tick/Tick.component';
import { AlertContainer, Message } from './Clipboard.style';

const ClipboardComponent = () => {
  const { modal, setOpen } = useContext(ModalContext);
  return (
    <>
      {modal && (
        <Alert name='clipboard'>
          <AlertContainer className='cursor' onClick={setOpen}>
            <TickComponent />
            <Message>Email copied to clipboard!</Message>
            <CloseComponent />
          </AlertContainer>
        </Alert>
      )}
    </>
  );
};

export default ClipboardComponent;
