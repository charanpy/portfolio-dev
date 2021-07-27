import React from 'react';
import ContactMeComponent from '../../components/ContactMe/ContactMe.component';
import Container from '../../layout/Container/Container.component';
import Seo from '../../layout/Seo/Seo';

const Contact = () => {
  return (
    <>
      <Seo title='Contact' description='Contact me to collobrate or discuss' />
      <Container>
        <ContactMeComponent />
      </Container>
    </>
  );
};

export default Contact;
