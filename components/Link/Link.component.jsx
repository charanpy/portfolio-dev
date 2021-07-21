import React from 'react';
import Link from 'next/link';

const LinkComponent = ({ path, children }) => {
  return (
    <Link href={path} passHref>
      {children}
    </Link>
  );
};

export default LinkComponent;
