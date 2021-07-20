import React from 'react';
import Link from 'next/link';
import { Anchor } from './Link.style';

const LinkComponent = ({ path, children, center = true }) => {
  return (
    <Link href={path} passHref>
      {/* <Anchor center={center} href='#'> */}
      {children}
      {/* </Anchor> */}
    </Link>
  );
};

export default LinkComponent;
