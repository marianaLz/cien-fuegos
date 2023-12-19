import React, { useEffect, useRef } from 'react';

import { Flex } from '@chakra-ui/react';

import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Menu from '../components/Menu';

import { useViewHeight } from '../utils';

import '../styles.css';

const IndexPage = () => {
  const viewHeight = useViewHeight();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null) ref.current.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

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
