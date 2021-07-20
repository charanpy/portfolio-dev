import React from 'react';
import Router from 'next/link';
import { Link, NavList } from './Header.style';

const NavLink = ({
  children,
  navigate,
  custom = false,
  path,
  active,
  visible,
  anchor = true,
}) => {
  return (
    <NavList
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={navigate}
      visible={visible}
    >
      {!anchor ? (
        <>{children}</>
      ) : custom ? (
        <Router href={path} passHref>
          <Link href='#' active={path === active}>
            {children}
          </Link>
        </Router>
      ) : (
        <Link href={path} active={path === active}>
          {children}
        </Link>
      )}
    </NavList>
  );
};

export default NavLink;
