import React from 'react';

import {
  Divider,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { menu } from '../data';
import { formatPrice } from '../utils';

const Menu = () => {
  return (
    <Tabs
      colorScheme='red'
      h={{ lg: '100vh' }}
      id='menu'
      isFitted
      pos='relative'
      scrollSnapAlign={{ lg: 'start' }}
      size='lg'
    >
      <TabList
        bg='white'
        pos='absolute'
        right='0'
        top={{ base: 'calc(40vh - 44px)', lg: '0' }}
        w={{ base: '100%', lg: '50vw' }}
        zIndex='1'
      >
        {Object.keys(menu).map((item) => (
          <Tab fontSize={{ base: 'xs', lg: 'sm' }} key={`tab-${item}`} px='2'>
            {item}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {Object.values(menu).map((item, index) => (
          <TabPanel key={`tab-panel-${index}`} p='0'>
            <Flex flexDir={{ base: 'column', lg: 'row' }}>
              <Image
                alt='Comida italiana en San Miguel de Allende'
                name='Comida italiana en San Miguel de Allende'
                title='Comida italiana en San Miguel de Allende'
                src={item.image}
                h={{ base: '40vh', lg: '100vh' }}
                objectFit='cover'
                objectPosition={{ lg: 'top' }}
                w={{ lg: '50vw' }}
              />
              <Flex
                align='center'
                flexDir='column'
                gap={{ base: '6', lg: '12' }}
                h={{ lg: '100vh' }}
                justify={{
                  lg: index === 0 || index === 2 ? 'center' : 'flex-start',
                }}
                overflow='scroll'
                px={{ base: '4', lg: '24', xl: '32' }}
                pb={{ base: '16', lg: '24' }}
                pt={{ base: '4', lg: '24' }}
                w={{ base: 'full', lg: '50vw' }}
              >
                {Object.keys(item.categories).map((category) => (
                  <Flex
                    flexDir='column'
                    gap={{ base: '4', lg: '4' }}
                    key={category}
                    w='full'
                  >
                    <Text
                      as='h2'
                      fontFamily='birch-std'
                      fontSize={{ base: '2xl', lg: '3xl' }}
                      fontWeight='semibold'
                      letterSpacing='widest'
                      textAlign='center'
                    >
                      {category}
                    </Text>
                    <Flex flexDir='column' gap='4'>
                      {item.categories[category].map((element) => (
                        <Flex
                          align='center'
                          flexDir='column'
                          key={element.name}
                        >
                          <Text>{element.name}</Text>
                          <Text fontSize='xs'>{element.description}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Menu;
