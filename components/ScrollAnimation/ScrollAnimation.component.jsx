import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const centerClass = { display: 'flex', justifyContent: 'center' };

const ScrollAnimation = ({ children, center = false }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      }
    }
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      {isMobile ? (
        <div>{children}</div>
      ) : (
        <motion.div
          style={center ? centerClass : ''}
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default ScrollAnimation;
