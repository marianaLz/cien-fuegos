import React from 'react';

import { Flex, Image, Show, Text } from '@chakra-ui/react';

import photoImage from '../images/chef-davide-giribaldi.jpeg';

const About = () => {
  return (
    <Flex
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      justify='flex-end'
      minH='100vh'
      scrollSnapAlign='start'
    >
      <Flex
        align='center'
        flexDir='column'
        gap='4'
        h={{ lg: '100vh' }}
        justify={{ xl: 'center' }}
        overflow='scroll'
        px={{ base: '4', lg: '24', xl: '32' }}
        py={{ base: '12', lg: '16' }}
        textAlign='center'
        w={{ lg: '50vw' }}
      >
        <Text
          fontFamily='birch-std'
          fontSize='3xl'
          fontWeight='semibold'
          letterSpacing='widest'
        >
          sobre nosotros
        </Text>
        <Text>
          Bienvenido a Cien Fuegos, donde el arte de la pizza napolitana viene a
          la vida en San Miguel de Allende. En Cien Fuegos, estamos orgullosos
          de presentar una experiencia culinaria curada por las hábiles manos
          del Chef Davide Giribaldi, un maestro en el arte de hacer pizzas.
          Formado en la renombrada pizzería Mastu rafe de Imperia, Italia, el
          Chef Davide trae los auténticos sabores de la pizza napolitana a
          nuestro encantador restaurante.
        </Text>
        <Text as='h2'>
          Nuestro equipo elabora un menú que muestra la rica herencia de la
          pizza italiana, utilizando ingredientes de primera calidad
          meticulosamente elegidos de las mejores granjas y mercados de Italia y
          San Miguel.
        </Text>
        <Show above='md'>
          <Text>
            Adéntrese en este mundo culinario y conozca nuestra pasión por crear
            exquisitas pizzas napolitanas. Consulte nuestra carta, elaborada con
            esmero y precisión, ofreciendo una selección de pizzas que reflejan
            la maestría de cada chef.
          </Text>
          <Text>
            Planifique su visita con facilidad accediendo a la información sobre
            nuestra ubicación. Cien Fuegos no es sólo un restaurante; es un
            destino donde convergen pasión tradición y sabores excepcionales.
            Únase a nosotros en Cien Fuegos y experimente la maestría de la
            pizza napolitana en San Miguel de Allende.
          </Text>
        </Show>
      </Flex>
      <Image
        alt='Chef Davide Giribaldi'
        name='Chef Davide Giribaldi'
        title='Chef Davide Giribaldi'
        src={photoImage}
        h={{ base: '40vh', lg: '100vh' }}
        objectFit='cover'
        objectPosition='right'
        w={{ lg: '50vw' }}
      />
    </Flex>
  );
};

export default About;
