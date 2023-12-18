import React from 'react';

import {
  Divider,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconLink,
} from '@tabler/icons-react';

import pitahayaLogo from '../images/pitahaya.png';

const Contact = () => {
  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      minH='100vh'
      scrollSnapAlign='start'
    >
      <Flex h={{ base: '40vh', lg: '100vh' }} w={{ lg: '50vw' }}>
        <iframe
          height='100%'
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          src='https://www.google.com/maps/embed?pb=!4v1702882673310!6m8!1m7!1sCAoSLEFGMVFpcE5zZmVBeVVJODZFUTl0LXFLMEU4V3JYMWVLZC1uRDQ2X2FBcmpp!2m2!1d20.99029657251741!2d-100.7833646379271!3f40!4f0!5f0.7820865974627469'
          title='Cien Fuegos | Pizza & comfort food'
          width='100%'
        ></iframe>
      </Flex>
      <Flex
        align='center'
        flexDir='column'
        gap='4'
        h={{ base: '60vh', lg: '100vh' }}
        justify='space-between'
        px={{ base: '4', lg: '24', xl: '32' }}
        py='4'
        textAlign='center'
        w={{ lg: '50vw' }}
      >
        <Flex
          align='center'
          flex='1'
          flexDir='column'
          gap='4'
          justify='center'
          py={{ base: '8', lg: '12' }}
        >
          <Text
            fontFamily='birch-std'
            fontSize='3xl'
            fontWeight='semibold'
            letterSpacing='widest'
          >
            contacto
          </Text>
          <Flex flexDir='column' gap='2'>
            <Text>
              Carretera San Miguel de Allende - Dolores Hidalgo km 7.5
            </Text>
            <Text>San Miguel de Allende, Gto., México</Text>
            <Text>Todos los días de 13:00 a 20:00</Text>
            <Text fontStyle='italic'>415 114 7275</Text>
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
        </Flex>
        <Flex align='center' gap='1'>
          <Text color='gray' fontSize='sm'>
            Hecho con amor por
          </Text>
          <Link
            href='https://pitahaya.studio/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Image
              alt='Diseño de páginas web'
              name='Diseño de páginas web'
              title='Diseño de páginas web'
              src={pitahayaLogo}
              objectFit='contain'
              w='20'
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
