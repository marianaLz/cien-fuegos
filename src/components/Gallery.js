import React from 'react';

import { Flex, Image, Link, SimpleGrid, Show, Text } from '@chakra-ui/react';

import photoImage1 from '../images/cien-fuegos-sma-1.jpeg';
import photoImage2 from '../images/cien-fuegos-sma-2.jpeg';
import photoImage3 from '../images/cien-fuegos-sma-3.jpeg';
import photoImage4 from '../images/cien-fuegos-sma-4.jpeg';
import photoImage5 from '../images/cien-fuegos-sma-5.jpeg';
import photoImage6 from '../images/cien-fuegos-sma-6.jpeg';
import photoImage7 from '../images/cien-fuegos-sma-7.jpeg';
import photoImage8 from '../images/cien-fuegos-sma-8.jpeg';
import photoImage9 from '../images/cien-fuegos-sma-9.jpeg';

const photos = [
  photoImage1,
  photoImage2,
  photoImage3,
  photoImage4,
  photoImage5,
  photoImage6,
  photoImage7,
  photoImage8,
  photoImage9,
];

const Gallery = ({ viewHeight }) => {
  return (
    <Flex
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      h={viewHeight}
      scrollSnapAlign='start'
    >
      <Flex
        align='center'
        flexDir='column'
        gap='4'
        h={{ base: viewHeight * 0.65, lg: viewHeight }}
        justify={{ xl: 'center' }}
        overflow='scroll'
        px={{ base: '4', lg: '24', xl: '32' }}
        py={{ base: '4', lg: '16' }}
        textAlign={{ lg: 'center' }}
        w={{ lg: '50vw' }}
      >
        <Text
          fontFamily='birch-std'
          fontSize={{ base: '2xl', lg: '3xl' }}
          fontWeight='semibold'
          letterSpacing='widest'
          textAlign='center'
        >
          ¡visítanos!
        </Text>
        <Show above='md'>
          <Text>
            En Cien Fuegos, nos enorgullece brindarte una experiencia
            gastronómica única, donde la calidad de nuestros platillos es
            nuestra prioridad.
          </Text>
          <Text>
            Todos los jueves, te invitamos a multiplicar el placer con nuestra
            oferta especial: ¡2x1 en nuestras irresistibles pizzas! Solo válido
            pagando en efectivo, porque los jueves son para saborear y ahorrar
            al máximo.
          </Text>
        </Show>
        <Text as='h2'>
          Te esperamos en nuestro acogedor rincón campirano para que disfrutes
          de la pizza más deliciosa, acompañada de un ambiente que te robará el
          corazón.
        </Text>
        <Text>
          Además, si estás explorando la ruta del vino, completa tu experiencia
          con nosotros, deleitándote con una deliciosa comida y la degustación
          de los exquisitos vinos de la región. Un viaje de sabores que no
          querrás perderte.
        </Text>
        <Text>¡Te esperamos para crear momentos inolvidables!</Text>
        <Flex gap='2'>
          <Link
            href='https://www.instagram.com/explore/tags/cienfuegospizza/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Text as='h3'>#CienFuegosPizza</Text>
          </Link>
          <Link
            href='https://www.instagram.com/explore/tags/cienfuegossabor/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Text as='h3'>#CienFuegosSabor</Text>
          </Link>
        </Flex>
      </Flex>
      <SimpleGrid
        as='a'
        columns='3'
        gap='1'
        h={{ base: viewHeight * 0.35, lg: viewHeight }}
        href='https://www.instagram.com/cienfuegos.sma/'
        rel='noopener noreferrer'
        target='_blank'
        w={{ lg: '50vw' }}
      >
        {photos.map((item) => (
          <Image
            alt='Comida italiana en San Miguel de Allende'
            name='Comida italiana en San Miguel de Allende'
            title='Comida italiana en San Miguel de Allende'
            src={item}
            h={{ base: viewHeight * 0.11, lg: viewHeight * 0.33 }}
            objectFit='cover'
            objectPosition='right'
            w='100%'
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Gallery;
