import React, { useEffect, useRef, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import scrollTo from 'gatsby-plugin-smoothscroll';

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
  const viewHeight = useViewHeight();
  const [location, setLocation] = useState('#inicio');

  useEffect(() => {
    if (ref.current !== null) ref.current.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  const navigation = [
    '#inicio',
    '#nosotros',
    '#menu',
    '#visitanos',
    '#contacto',
  ];

  const navigate = (item) => {
    scrollTo(item);
    setLocation(item);
  };

  return (
    <Flex
      flexDir='column'
      fontFamily='Montserrat'
      fontSize={{ base: 'sm', lg: 'base' }}
    >
      <Flex
        as='main'
        flexDir='column'
        h='100vh'
        overflow='scroll'
        ref={ref}
        scrollSnapType='y mandatory'
      >
        <Loader />
        <Hero viewHeight={viewHeight} />
        <About viewHeight={viewHeight} />
        <Menu viewHeight={viewHeight} />
        <Gallery viewHeight={viewHeight} />
        <Contact viewHeight={viewHeight} />
        <Flex
          align='center'
          bg='rgba(255,255,255,0.5)'
          borderRadius='full'
          flexDir='column'
          gap='2'
          justify='center'
          p='1'
          position='fixed'
          right='2'
          top='calc(50% - 40px)'
        >
          {navigation.map((item) => (
            <Box
              as='button'
              bg='#CC0019'
              borderRadius='full'
              h='2'
              onClick={() => navigate(item)}
              opacity={location === item ? '1' : '0.5'}
              transform={location === item ? 'scale(1.5)' : 'scale(1)'}
              transition='all 0.2s ease'
              w='2'
              _hover={{
                opacity: '1',
                transform: 'scale(1.5)',
              }}
            />
          ))}
        </Flex>
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
