import React, { useEffect, useRef, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Menu from '../components/Menu';

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
    for (let i = 0; i < carouselElements.length; i++) {
      const element = carouselElements[i];
      elements.current.push(element);
      elementIndices.current[element.id] = i;
    }
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activated = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0]
        );

        if (activated.intersectionRatio > 0) {
          const activatedIndex =
            elementIndices.current[activated.target.getAttribute('id')];
          setCurrentIndex(activatedIndex);
        }
      },
      { root: ref.current, threshold: 0.5 }
    );

    sliderElements.forEach((element) => observer.observe(element));

    return () => {
      sliderElements.forEach((element) => observer.unobserve(element));
    };
  }, [elements, elementIndices, sliderElements, ref]);

  return (
    <Flex
      flexDir='column'
      fontFamily='Montserrat'
      fontSize={{ base: 'sm', lg: 'base' }}
    >
      <Loader />

      <Flex
        align='center'
        bg='rgba(255,255,255,0.5)'
        borderRadius='full'
        flexDir='column'
        gap='3'
        justify='center'
        p='1'
        position='fixed'
        right='2'
        top='calc(50% - 40px)'
        id='indicator'
        zIndex='1'
      >
        {sliderElements.map((element, index) => (
          <Box
            as='button'
            bg='#CC0019'
            borderRadius='full'
            h='2'
            key={`dot-${index}`}
            onClick={() => element.scrollIntoView({ behavior: 'smooth' })}
            opacity={currentIndex === index ? '1' : '0.5'}
            transform={currentIndex === index ? 'scale(1.5)' : 'scale(1)'}
            transition='all 0.2s ease'
            w='2'
            _hover={{
              opacity: '1',
              transform: 'scale(1.5)',
            }}
          />
        ))}
      </Flex>

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
