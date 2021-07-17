import React from 'react';
import { MobileNavContainer, MobileNavWrapper } from './Header.style';
import SharedLinkComponent from './SharedLink.component';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '200%' },
};
const MobileNavComponent = ({ isOpen }) => {
  return (
    <MobileNavContainer
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <MobileNavWrapper>
        <SharedLinkComponent mobile />
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};

export default MobileNavComponent;
