import React from 'react';
import router from 'next/router';
import { ButtonContainer, CenterContainer } from '../../styles/common.style';
import ButtonComponent from '../Button/Button.component';
import HeadingComponent from '../Heading/Heading.component';
import { AboutMe } from '../Intro/Intro.style';

const NotFoundComponent = () => {
  const handleClick = (path) => router.push(path);

  return (
    <CenterContainer>
      <HeadingComponent mb>Something&apos;s wrong here... </HeadingComponent>
      <AboutMe>The page that you&apos;re looking for is not found</AboutMe>
      <div style={{ display: 'flex' }}>
        <ButtonContainer>
          <ButtonComponent handleClick={() => handleClick('/')}>
            Home
          </ButtonComponent>
        </ButtonContainer>
        <ButtonComponent handleClick={() => handleClick('/blog')}>
          Blog
        </ButtonComponent>
      </div>
    </CenterContainer>
  );
};

export default NotFoundComponent;
