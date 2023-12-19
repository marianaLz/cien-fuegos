import React, { useEffect, useState } from 'react';

import { Flex, Image } from '@chakra-ui/react';

import icon from '../images/icon.png';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Flex
      align='center'
      bg='white'
      h='100vh'
      justify='center'
      pos='fixed'
      opacity={show ? '1' : '0'}
      transition='opacity 0.5s ease, z-index 0s ease 0.5s'
      w='full'
      zIndex={show ? '3' : '-1'}
    >
      <Image className='spinner' src={icon} />
    </Flex>
  );
};

export default Loader;
