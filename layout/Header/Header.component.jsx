import React from 'react';
import NavigationProvider from '../../providers/NavigationProvider';
import Image from 'next/image';
import { Header, HeaderNameContainer } from './Header.style';
import Navbar from './Navbar.component';
import LinkComponent from '../../components/Link/Link.component';

const HeaderComponent = () => {
  return (
    <NavigationProvider>
      <Header>
        <HeaderNameContainer>
          <LinkComponent path='/'>
            <div>
              <Image
                src='/logo.png'
                alt='Logo'
                width={30}
                height={30}
                quality='100'
              />
            </div>
          </LinkComponent>
        </HeaderNameContainer>
        <Navbar />
      </Header>
    </NavigationProvider>
  );
};

export default HeaderComponent;
