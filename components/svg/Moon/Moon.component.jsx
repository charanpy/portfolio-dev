import React from 'react';
import { Svg, SvgContainer } from '../Svg.style';

const MoonComponent = () => {
  return (
    <SvgContainer>
      <Svg viewBox='-6 -6 12 12'>
        <title>Dark mode</title>
        <defs>
          <mask id='earth'>
            <rect fill='white' x='-5' y='-5' width='10' height='10'></rect>
            <circle fill='black' cx='3.141592654' r='5' />
          </mask>
        </defs>
        <circle
          r='5'
          fill='currentColor'
          mask='url(#earth)'
          transform='rotate(-23.5)'
        />
      </Svg>
    </SvgContainer>
  );
};

export default MoonComponent;
