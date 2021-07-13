import React from 'react';
import ThemeComponent from '../../components/Theme/Theme.component';
import { NavContainer } from './Header.style';
import NavLink from './NavLink.component';

const Navbar = () => {
  return (
    <nav>
      <NavContainer>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
        <ThemeComponent />
      </NavContainer>
    </nav>
  );
};

export default Navbar;
