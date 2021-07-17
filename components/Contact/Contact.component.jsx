import React from 'react';
import ContactList from './ContactList.component';
import { ContactContainer } from './Contact.style';

const ContactComponent = () => {
  return (
    <ContactContainer>
      <ContactList />
    </ContactContainer>
  );
};

export default ContactComponent;
