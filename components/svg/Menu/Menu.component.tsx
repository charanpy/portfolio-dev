import React from 'react';
import SvgComponent from '../Svg.component';
import { Svg } from '../Svg.style';

const Menu = () => {
  return (
    <SvgComponent>
      <Svg viewBox='0 0 100 80'>
        <rect width='100' height='20'></rect>
        <rect y='30' width='100' height='20'></rect>
        <rect y='60' width='100' height='20'></rect>
      </Svg>
    </SvgComponent>
  );
};

export default Menu;
