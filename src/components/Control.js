import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

const Control = ({ currentIndex, sliderElements }) => {
  return (
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
      zIndex='2'
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
  );
};

export default Control;
