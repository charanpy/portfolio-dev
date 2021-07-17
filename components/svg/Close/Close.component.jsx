import React from 'react';
import SvgComponent from '../Svg.component';
import { Svg } from '../Svg.style';

const CloseComponent = () => {
  return (
    <SvgComponent>
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 40 40'
        enable-background='new 0 0 40 40'
      >
        <line
          x1='15'
          y1='15'
          x2='25'
          y2='25'
          stroke='#fff'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeMiterlimit='10'
        ></line>
        <line
          x1='25'
          y1='15'
          x2='15'
          y2='25'
          stroke='#fff'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeMiterlimit='10'
        ></line>
        <circle
          cx='20'
          cy='20'
          r='19'
          opacity='0'
          stroke='#000'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeMiterlimit='10'
          fill='none'
        ></circle>
        <path
          d='M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z'
          stroke='#fff'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeMiterlimit='10'
          fill='none'
        ></path>
      </Svg>
    </SvgComponent>
  );
};

export default CloseComponent;
