import React from 'react';
import { Svg, SvgContainer } from '../../components/svg/Svg.style';

const Menu = () => {
  return (
    <SvgContainer>
      <Svg viewBox='0 0 100 80'>
        <rect width='100' height='20' fill='currentColor'></rect>
        <rect y='30' width='100' height='20' fill='currentColor'></rect>
        <rect y='60' width='100' height='20' fill='currentColor'></rect>
      </Svg>
    </SvgContainer>
  );
};

export default Menu;
