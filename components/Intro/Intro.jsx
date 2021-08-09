import React from 'react';
import { useRouter } from 'next/router';
import ButtonComponent from '../Button/Button.component';

import {
  IntroContainer,
  IntroWrapper,
  Field,
  FieldText,
  FieldTextColor,
  AboutMe,
  Highlight,
  AnimationContainer,
} from './Intro.style';

const Intro = () => {
  const router = useRouter();
  const handleClick = () => router.push('/projects');
  return (
    <IntroContainer id='#'>
      <IntroWrapper>
        <div>
          <Field>Hi, my name is</Field>
        </div>
        <div>
          <FieldText>Charan,</FieldText>
        </div>
        <div>
          <FieldTextColor>Full Stack Developer.</FieldTextColor>
        </div>
        <div>
          <AboutMe>
            Full stack and <Highlight>React native</Highlight> developer from
            India. I enjoy building websites and web apps which is responsive
            and highly performant.
          </AboutMe>
        </div>
        <AnimationContainer
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            ease: 'linear',
            delay: 2,
          }}
        >
          <ButtonComponent handleClick={handleClick}>Projects</ButtonComponent>
        </AnimationContainer>
      </IntroWrapper>
    </IntroContainer>
  );
};

export default Intro;
