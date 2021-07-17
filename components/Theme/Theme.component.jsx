import React, { useContext } from 'react';
import Image from 'next/image';
import NavLink from '../../layout/Header/NavLink.component';

import { ThemeContext } from '../../providers/ThemeProvider';
import { Arrow, ArrowContainer, ImageContainer } from './Theme.style';

const ThemeComponent = ({ mobile }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div onClick={toggleTheme}>
      <NavLink visible>
        <ArrowContainer>
          <Arrow>
            {theme ? (
              <>&#9728;</>
            ) : (
              <ImageContainer style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src='/moon.png'
                  width={20}
                  height={20}
                  alt='dark theme'
                  objectFit='contain'
                />
              </ImageContainer>
            )}{' '}
            {mobile ? 'Theme' : ''}
          </Arrow>
        </ArrowContainer>
      </NavLink>
    </div>
  );
};

export default ThemeComponent;
