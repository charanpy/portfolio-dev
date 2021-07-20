import React, { useRef } from 'react';
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
import submitContactData from './contactService';

const ContactMeComponent = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const name = nameRef?.current?.value;
    const message = messageRef?.current.value;
    const [isValid] = contactFormValidation(email, name, message);
    if (!isValid) return;
    submitContactData({ email, name, message });
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
