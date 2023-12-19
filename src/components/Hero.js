import React from 'react';

import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import logoImage from '../images/cien-fuegos-pizza-and-comfort-food.jpeg';
import photoImage from '../images/pizza-napolitana-en-san-miguel-de-allende.jpg';
import photoImageMob from '../images/pizza-napolitana-en-san-miguel-de-allende.png';

const Hero = ({ viewHeight }) => {
  const image = useBreakpointValue({ base: photoImageMob, lg: photoImage });

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      gap='8'
      h={viewHeight}
      id='inicio'
      scrollSnapAlign='start'
    >
      <Image
        alt='Pizza napolitana en San Miguel de Allende'
        name='Pizza napolitana en San Miguel de Allende'
        title='Pizza napolitana en San Miguel de Allende'
        src={image}
        h={{ base: viewHeight * 0.35, md: viewHeight * 0.5, lg: viewHeight }}
        objectFit='cover'
        objectPosition={{ base: 'bottom', lg: 'right' }}
        w={{ lg: '50vw' }}
      />
      <Flex
        align='center'
        flexDir='column'
        fontFamily='birch-std'
        gap='2'
        h={{ base: viewHeight * 0.65, lg: viewHeight }}
        justify='center'
        letterSpacing='widest'
        px={{ base: '4', lg: '24', xl: '32' }}
        w={{ lg: '50vw' }}
      >
        <Image
          alt='Cocina italiana en San Miguel de Allende'
          name='Cocina italiana en San Miguel de Allende'
          title='Cocina italiana en San Miguel de Allende'
          src={logoImage}
          w='92'
        />
        <Text align='center' as='h1' fontSize='2xl'>
          "comfort food: la cocina de siempre para disfrutar y compartir"
        </Text>
        <Text>Jaime Oliver</Text>
      </Flex>
    </Flex>
  );
};

export default Hero;
