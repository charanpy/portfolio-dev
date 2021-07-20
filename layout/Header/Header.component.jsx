import React from 'react';
import NavigationProvider from '../../providers/NavigationProvider';
import Image from 'next/image';
import { Header, HeaderNameContainer } from './Header.style';
import Navbar from './Navbar.component';

const HeaderComponent = () => {
  return (
    <NavigationProvider>
      <Header>
        <HeaderNameContainer>
          <Image
            src='/logo.png'
            alt='Logo'
            width={30}
            height={30}
            quality='100'
          />
        </HeaderNameContainer>
        <Navbar />
      </Header>
    </NavigationProvider>
  );
};

export default HeaderComponent;
