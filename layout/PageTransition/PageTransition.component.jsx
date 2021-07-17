import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0, delay: 1, duration: 5 },
  exit: { opacity: 0, x: 0, y: -100, duration: 5 },
};
const PageTransition = ({ children, route }) => {
  return (
    <motion.div
      key={route}
      initial='hidden'
      animate='enter'
      variants={variants}
      exit='exit'
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
