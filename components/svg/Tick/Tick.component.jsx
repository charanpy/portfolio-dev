import React from 'react';
import SvgComponent from '../Svg.component';
import { Svg } from '../Svg.style';

const TickComponent = () => {
  return (
    <SvgComponent>
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
      >
        <path
          d='M19 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z'
          stroke='transparent'
          fill='currentColor'
        />
      </Svg>
    </SvgComponent>
  );
};

export default TickComponent;
