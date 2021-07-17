import React, { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import SvgComponent from '../Svg.component';
import { Svg } from '../Svg.style';

const Email = () => {
  const { setOpen } = useContext(ModalContext);
  const copyToClipboard = () => {
    navigator.clipboard.writeText('durgicharan81@gmail.com');
    setOpen();
  };
  return (
    <>
      <div onClick={copyToClipboard}>
        <SvgComponent>
          <Svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            xmlSpace='preserve'
            width='125'
            height='100'
            viewBox='0 0 125 100'
          >
            <path
              d='M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z'
              strokeWidth='0'
              stroke='transparent'
              fill='currentColor'
            />
            <path
              d='M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z'
              strokeWidth='0'
              stroke='transparent'
              fill='currentColor'
            />
            <title>durgicharan81@gmail.com</title>
          </Svg>
        </SvgComponent>
      </div>
    </>
  );
};

export default Email;
