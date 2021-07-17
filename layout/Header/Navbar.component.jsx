import React, { useState } from 'react';
import { MenuContainer, NavContainer } from './Header.style';
import MobileNavComponent from './MobileNav.component';
import SharedLinkComponent from './SharedLink.component';
import { Svg, SvgContainer } from '../../components/svg/Svg.style';
import CloseComponent from '../../components/svg/Close/Close.component';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => setNavbar((toggle) => !toggle);
  return (
    <>
      <nav>
        <NavContainer>
          <SharedLinkComponent />
        </NavContainer>
      </nav>
      <MenuContainer onClick={toggleNavbar}>
        {!navbar ? (
          <SvgContainer>
            <Svg viewBox='0 0 100 80'>
              <rect width='100' height='10' fill='currentColor'></rect>
              <rect y='30' width='100' height='10' fill='currentColor'></rect>
              <rect y='60' width='100' height='10' fill='currentColor'></rect>
            </Svg>
          </SvgContainer>
        ) : (
          <CloseComponent />
        )}
      </MenuContainer>
      <MobileNavComponent isOpen={navbar} />
    </>
  );
};

export default Navbar;
