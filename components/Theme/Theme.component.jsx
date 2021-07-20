import React, { useContext } from 'react';
import NavLink from '../../layout/Header/NavLink.component';

import { ThemeContext } from '../../providers/ThemeProvider';
import { Arrow, ArrowContainer } from './Theme.style';
import MoonComponent from '../svg/Moon/Moon.component';

const ThemeComponent = ({ mobile }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <NavLink visible navigate={toggleTheme} anchor={false}>
      <ArrowContainer>
        <Arrow>
          {theme ? <>&#9728;</> : <MoonComponent />} {mobile ? 'Theme' : ''}
        </Arrow>
      </ArrowContainer>
    </NavLink>
  );
};

export default ThemeComponent;
