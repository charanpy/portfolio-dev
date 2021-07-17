import React from 'react';
import Email from '../svg/Email/Email.component';
import GithubComponent from '../svg/Github/Github.component';
import InstagramComponent from '../svg/Instagram/Instagram.component';
import LinkedinComponent from '../svg/Linkedin/Linkedin.component';
import { Navigator } from './Contact.style';

const ContactList = () => {
  return (
    <>
      <Navigator href='https://github.com/charanpy/'>
        <GithubComponent />
      </Navigator>
      <Navigator href='https://www.instagram.com/charan030702/'>
        <InstagramComponent />
      </Navigator>
      <Navigator>
        <LinkedinComponent />
      </Navigator>
      <Navigator href='#'>
        <Email />
      </Navigator>
    </>
  );
};

export default ContactList;
