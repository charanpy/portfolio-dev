import React from 'react';
import { Link } from './Header.style';

const NavLink = ({ children }) => {
  return (
    <li>
      <Link>{children}</Link>
    </li>
  );
};

export default NavLink;
