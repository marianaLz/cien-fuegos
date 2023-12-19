import React, { useEffect, useRef, useState } from 'react';

import { Flex } from '@chakra-ui/react';

import About from '../sections/About';
import Contact from '../sections/Contact';
import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

import Control from '../components/Control';
import Loader from '../components/Loader';

import { useViewHeight } from '../utils';

import '../styles.css';

const IndexPage = () => {
  const ref = useRef(null);
  const elements = useRef([]);
  const elementIndices = useRef({});
  const viewHeight = useViewHeight();
  const sliderElements = elements.current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (ref.current !== null) ref.current.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    const carouselElements = ref.current.children;
    [...carouselElements].forEach((element, i) => {
      elements.current.push(element);
      elementIndices.current[element.id] = i;
    });
  }, [ref, sliderElements]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activated = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0]
        );

        const activatedIndex =
          elementIndices.current[activated.target.getAttribute('id')];

        if (activated.intersectionRatio > 0) setCurrentIndex(activatedIndex);
      },
      { root: ref.current, threshold: 0.5 }
    );

    sliderElements.forEach((element) => observer.observe(element));

    return () => {
      sliderElements.forEach((element) => observer.unobserve(element));
    };
  }, [sliderElements, ref]);

  return (
    <Flex
      flexDir='column'
      fontFamily='Montserrat'
      fontSize={{ base: 'sm', lg: 'base' }}
    >
      <Loader />
      <Control currentIndex={currentIndex} sliderElements={sliderElements} />

      <Flex
        as='main'
        className='carousel'
        flexDir='column'
        h='100vh'
        overflow='scroll'
        ref={ref}
        scrollSnapType='y mandatory'
      >
        <Hero viewHeight={viewHeight} />
        <About viewHeight={viewHeight} />
        <Menu viewHeight={viewHeight} />
        <Gallery viewHeight={viewHeight} />
        <Contact viewHeight={viewHeight} />
      </Flex>
    </Flex>
  );
};

export default IndexPage;

export const Head = () => (
  <React.Fragment>
    <title>Cien Fuegos | Pizza & comfort food</title>
    <meta
      name='description'
      content='Pizza Napolitana y cocina italiana en San Miguel de Allende'
    />
    <meta name='robots' content='INDEX,FOLLOW' />
    {/* <link rel='canonical' href='https://pitahaya.studio' /> */}
    <meta
      property='og:site_name'
      content='Cien Fuegos | Pizza & comfort food'
    />
    <meta property='og:title' content='Cien Fuegos | Pizza & comfort food' />
    <meta
      property='og:description'
      content='Pizza Napolitana y cocina italiana en San Miguel de Allende'
    />
    <meta property='og:type' content='website' />
    {/* <meta property='og:url' content='https://pitahaya.studio' /> */}
    <meta property='og:image' content='https://i.imgur.com/nh7MEkY.png' />
    <meta
      property='og:image:secure_url'
      content='https://i.imgur.com/nh7MEkY.png'
    />
    <meta property='og:image:type' content='image/jpeg' />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
    <meta property='og:image:alt' content='Cien Fuegos' />
    <meta property='og:locale' content='es_MX' />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:title' content='Cien Fuegos' />
    <meta
      property='twitter:description'
      content='Pizza Napolitana y cocina italiana en San Miguel de Allende'
    />
  </React.Fragment>
);
