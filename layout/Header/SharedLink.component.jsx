import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { NavigationContext } from '../../providers/NavigationProvider';
import ThemeComponent from '../../components/Theme/Theme.component';
import NavLink from './NavLink.component';
import { navData } from './helper';

const SharedLinkComponent = ({ mobile = false, toggleNavbar }) => {
  const { path: activePath, setPathName } = useContext(NavigationContext);
  const router = useRouter();
  const navigate = (path) => {
    if (router.route === '/' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
    setPathName(path);
    if (mobile) toggleNavbar();
  };
  return (
    <>
      {navData.map(({ name, path, custom }) => (
        <NavLink
          key={name}
          navigate={() => navigate(path)}
          path={path}
          custom={custom}
          active={activePath}
          visible={custom ? true : router.pathname === '/'}
        >
          {name}
        </NavLink>
      ))}
      <ThemeComponent mobile={mobile} />
    </>
  );
};

export default React.memo(SharedLinkComponent);
