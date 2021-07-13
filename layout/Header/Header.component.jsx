import React from 'react';
import { Header, HeaderName } from './Header.style';
import Navbar from './Navbar.component';

const HeaderComponent = () => {
  return (
    <Header>
      <div>
        <HeaderName>Charan</HeaderName>
      </div>
      <Navbar />
    </Header>
  );
};

export default HeaderComponent;
