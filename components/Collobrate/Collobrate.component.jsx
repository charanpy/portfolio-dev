import React from 'react';
import Link from 'next/link';
import ButtonComponent from '../Button/Button.component';
import ContactList from '../Contact/ContactList.component';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation.component';
import {
  CollabrateText,
  CollabrateHeader,
  HighlightText,
  CollabrateWrapper,
  SocialLink,
  LinkCenter,
} from './Collobrate.style';

const CollabrateComponent = () => {
  return (
    <CollabrateWrapper id='contact'>
      <ScrollAnimation>
        <CollabrateHeader>Interested in collaborating ?</CollabrateHeader>
        <CollabrateText>
          Let&apos;s have a chat.I&apos;m always open for future{' '}
          <HighlightText>opportunities</HighlightText>.
        </CollabrateText>
        <Link href='/contact' passHref>
          <LinkCenter href='#'>
            <ButtonComponent>Contact</ButtonComponent>
          </LinkCenter>
        </Link>
        <SocialLink>
          <ContactList />
        </SocialLink>
      </ScrollAnimation>
    </CollabrateWrapper>
  );
};

export default CollabrateComponent;
