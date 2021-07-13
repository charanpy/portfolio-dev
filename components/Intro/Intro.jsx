import React from 'react';
import Image from 'next/image';
import {
  IntroContainer,
  IntroWrapper,
  Field,
  FieldText,
  FieldTextColor,
  AboutMe,
  CoverWrapper,
} from './Intro.style';

const Intro = () => {
  return (
    <IntroContainer>
      <IntroWrapper>
        <Field>TECHNOLOGY</Field>
        <FieldText>I&apos;m Charan</FieldText>
        <FieldTextColor>Full&nbsp;Stack&nbsp;Developer</FieldTextColor>
        <AboutMe>
          I build web apps which is responsive and highly performant
        </AboutMe>
      </IntroWrapper>
      <CoverWrapper>
        <Image
          src='/cover.jpg'
          width={350}
          height={260}
          objectFit='cover'
          alt='cover-image'
        />
      </CoverWrapper>
    </IntroContainer>
  );
};

export default Intro;
