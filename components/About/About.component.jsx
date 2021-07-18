import React from 'react';
import Image from 'next/image';
import HeadingComponent from '../Heading/Heading.component';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation.component';
import {
  AboutContainer,
  AboutText,
  AboutWrapper,
  ContentWrapper,
  ImageContainer,
} from './About.style';
import SkillsComponent from './Skills.component';
import SkillContainerComponent from './SkillContainer.component';
import { skills } from './helper';

const AboutComponent = () => {
  console.log('About');
  return (
    <section id='about'>
      <ScrollAnimation>
        <AboutContainer>
          <HeadingComponent>About Me</HeadingComponent>
          <AboutWrapper>
            <ContentWrapper>
              <AboutText>
                Hello! My name is Charan. Currently, I&apos;m a college student
                pursuing BTECH in Chennai,India.I enjoy building logical and
                functional aspects of a web apps.
                <br />
                <br /> My interest in web development started back in 2020 when
                I started exploring basic HTML tags in code editor. Since then I
                am enjoying the journey of learning as well as building web
                apps.
                <br />
                <br />
                Here are few technologies that I have been working with it
                recently:
                <br />
                <br />
                <SkillContainerComponent technology={skills} />
              </AboutText>
            </ContentWrapper>
            <ContentWrapper>
              <ImageContainer>
                <Image src='/cover.jpg' layout='fill' alt='laptop' />
              </ImageContainer>
            </ContentWrapper>
          </AboutWrapper>
        </AboutContainer>
      </ScrollAnimation>
    </section>
  );
};

export default AboutComponent;
