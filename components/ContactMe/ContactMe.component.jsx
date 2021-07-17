import React from 'react';
import ButtonComponent from '../Button/Button.component';
import HeadingComponent from '../Heading/Heading.component';
import InputComponent from '../Input/Input.component';
import {
  ContactMeContainer,
  Form,
  TextArea,
  UserDetail,
} from './ContactMe.style';

const ContactMeComponent = () => {
  return (
    <ContactMeContainer>
      <HeadingComponent>Let&apos;s Start a Conversation</HeadingComponent>
      <Form>
        <UserDetail>
          <InputComponent placeholder='Name' type='text' required />
          <InputComponent placeholder='Email' type='email' required />
        </UserDetail>
        <TextArea placeholder='Message' required />
        <ButtonComponent dark>Send</ButtonComponent>
      </Form>
    </ContactMeContainer>
  );
};

export default ContactMeComponent;
