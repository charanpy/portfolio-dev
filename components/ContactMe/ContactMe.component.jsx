import React, { useContext, useRef } from 'react';
import ButtonComponent from '../Button/Button.component';
import HeadingComponent from '../Heading/Heading.component';
import InputComponent from '../Input/Input.component';
import contactFormValidation from '../../utils/contact-validation';
import {
  ContactMeContainer,
  Form,
  TextArea,
  UserDetail,
} from './ContactMe.style';
import submitContactData, { checkWindow, contactLimit } from './contactService';
import { ToastrContext } from '../../providers/ToastrProvider';

const ContactMeComponent = () => {
  const { openAlert } = useContext(ToastrContext);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const clearInput = () => {
    emailRef.current.value = '';
    nameRef.current.value = '';
    messageRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const name = nameRef?.current?.value;
    const message = messageRef?.current.value;
    const [isValid] = contactFormValidation(email, name, message);
    if (!isValid) return;
    const count = checkWindow(contactLimit);
    if (count && count >= 1) {
      openAlert({ variant: 'success', title: 'Sent successfully' });
      clearInput();
      return;
    }
    const [success, response] = await submitContactData({
      email,
      name,
      message,
    });
    openAlert({
      variant: success ? 'success' : 'error',
      title: response,
    });
    clearInput();
  };
  return (
    <ContactMeContainer>
      <HeadingComponent>Let&apos;s Start a Conversation</HeadingComponent>
      <Form onSubmit={handleSubmit}>
        <UserDetail>
          <InputComponent
            placeholder='Name'
            type='text'
            required
            ref={nameRef}
          />
          <InputComponent
            placeholder='Email'
            type='email'
            required
            ref={emailRef}
          />
        </UserDetail>
        <TextArea placeholder='Message' required ref={messageRef} />
        <ButtonComponent dark type='submit'>
          Send
        </ButtonComponent>
      </Form>
    </ContactMeContainer>
  );
};

export default ContactMeComponent;
