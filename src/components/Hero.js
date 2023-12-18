import React, { useEffect, useState } from 'react';

import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import logoImage from '../images/cien-fuegos-pizza-and-comfort-food.jpeg';
import photoImage from '../images/pizza-napolitana-en-san-miguel-de-allende.jpg';
import photoImageMob from '../images/pizza-napolitana-en-san-miguel-de-allende.png';

const Hero = () => {
  const [viewHeight, setViewHeight] = useState(0);
  const image = useBreakpointValue({ base: photoImageMob, lg: photoImage });

  useEffect(() => {
    // Verificar si window está disponible antes de usarlo
    if (typeof window !== 'undefined') {
      setViewHeight(window.innerHeight);
    }
  }, []);

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      gap='8'
      minH={viewHeight}
      scrollSnapAlign='start'
    >
      <Image
        alt='Pizza napolitana en San Miguel de Allende'
        name='Pizza napolitana en San Miguel de Allende'
        title='Pizza napolitana en San Miguel de Allende'
        src={image}
        h={{ base: viewHeight * 0.4, md: viewHeight * 0.05, lg: viewHeight }}
        objectFit='cover'
        objectPosition={{ base: 'bottom', lg: 'right' }}
        w={{ lg: '50vw' }}
      />
      <Flex
        align='center'
        flexDir='column'
        fontFamily='birch-std'
        gap='2'
        h={{ lg: viewHeight }}
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
