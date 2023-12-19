import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import photoImage from '../images/chef-davide-giribaldi.jpeg';
import { useRef } from 'react';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageTest() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section style={{ height: '200px' }}>
      <div ref={ref}>
        <img src={photoImage} alt='A London skyscraper' />
      </div>
      <motion.h2 style={{ y }}>{`#00`}</motion.h2>
    </section>
  );
}

export default ImageTest;
