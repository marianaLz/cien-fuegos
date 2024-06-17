import * as React from 'react';
import { Link } from 'gatsby';

import {
  Button,
  Divider,
  Flex,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';

import {
  IconArrowNarrowLeft,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconLink,
} from '@tabler/icons-react';

import '../styles.css';

const NotFoundPage = () => {
  return (
    <Flex
      align='center'
      flex={{ lg: '1' }}
      flexDir='column'
      fontSize={{ base: 'sm', lg: 'md' }}
      gap='8'
      h='100vh'
      justify={{ lg: 'space-between' }}
      px={{ base: '4', lg: '24', xl: '32' }}
      py='4'
      textAlign='center'
      w='100vw'
    >
      <Flex
        align='center'
        flex={{ lg: '1' }}
        flexDir='column'
        gap='4'
        h='full'
        justify='center'
        py={{ lg: '12' }}
      >
        <Text
          fontFamily='birch-std'
          fontSize={{ base: '5xl', lg: '6xl' }}
          fontWeight='semibold'
          letterSpacing='widest'
        >
          404
        </Text>
        <Text
          fontFamily='birch-std'
          fontSize={{ base: '2xl', lg: '3xl' }}
          fontWeight='semibold'
          letterSpacing='widest'
        >
          esta página no existe
        </Text>
        <Text fontSize={{ base: 'md', lg: 'lg' }}>
          ...pero espera, no te vayas. Recuerda que puedes encontrarnos en:
        </Text>
        <Flex flexDir='column' gap='2'>
          <Text>Carretera San Miguel de Allende - Dolores Hidalgo km 7.5</Text>
          <Text>San Miguel de Allende, Gto., México</Text>
          <Text>Todos los días de 13:00 a 20:00</Text>
          <Text>415 114 7275</Text>
        </Flex>
        <Divider />
        <Flex gap='2'>
          <IconButton
            as='a'
            href='https://www.instagram.com/cienfuegos.sma/'
            icon={<Icon as={IconBrandInstagram} h='6' w='6' />}
            rel='noopener noreferrer'
            target='_blank'
            variant='ghost'
          />
          <IconButton
            as='a'
            href='https://api.whatsapp.com/send?phone=5214151147275&text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva'
            icon={<Icon as={IconBrandWhatsapp} h='6' w='6' />}
            rel='noopener noreferrer'
            target='_blank'
            variant='ghost'
          />
          <IconButton
            as='a'
            href='https://reservandonos.com/lugar/restaurante-cien-fuegos-sma'
            icon={<Icon as={IconLink} h='6' w='6' />}
            rel='noopener noreferrer'
            target='_blank'
            variant='ghost'
          />
          <IconButton
            as='a'
            href='https://www.facebook.com/cienfuegossma'
            icon={<Icon as={IconBrandFacebook} h='6' w='6' />}
            rel='noopener noreferrer'
            target='_blank'
            variant='ghost'
          />
        </Flex>
        <Button
          as={Link}
          borderRadius='full'
          colorScheme='red'
          leftIcon={<IconArrowNarrowLeft />}
          to='/'
          variant='ghost'
        >
          Volver al inicio
        </Button>
      </Flex>
    </Flex>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
