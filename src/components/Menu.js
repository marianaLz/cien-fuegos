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

import { formatPrice } from '../utils';
import { menu } from '../data';

const Menu = ({ viewHeight }) => {
  return (
    <Tabs
      colorScheme='red'
      isFitted
      minH={viewHeight}
      scrollSnapAlign='start'
      size='lg'
    >
      <TabList
        bg='white'
        pos='absolute'
        right='0'
        top={{ base: `${viewHeight * 0.4 - 44}px`, lg: '0' }}
        w={{ base: '100%', lg: '50vw' }}
        zIndex='1'
      >
        {Object.keys(menu).map((item) => (
          <Tab fontSize={{ base: 'xs', lg: 'sm' }} key={`tab-${item}`} px='2'>
            {item}
          </Tab>
        ))}
      </TabList>
      <TabPanels h='full'>
        {Object.values(menu).map((item, index) => (
          <TabPanel h='full' key={`tab-panel-${index}`} p='0'>
            <Flex flexDir={{ base: 'column', lg: 'row' }} h='full'>
              <Image
                alt='Comida italiana en San Miguel de Allende'
                name='Comida italiana en San Miguel de Allende'
                title='Comida italiana en San Miguel de Allende'
                src={item.image}
                h={{ base: viewHeight * 0.4, lg: viewHeight }}
                objectFit='cover'
                objectPosition={{ lg: 'top' }}
                w={{ lg: '50vw' }}
              />
              <Flex
                align='center'
                flexDir='column'
                gap='12'
                h={{ base: 'auto', lg: viewHeight }}
                justify={{
                  lg: index === 0 || index === 2 ? 'center' : 'flex-start',
                }}
                overflow='scroll'
                px={{ base: '4', lg: '24', xl: '32' }}
                py={{ base: '4', lg: '24' }}
                w={{ base: 'full', lg: '50vw' }}
              >
                {Object.keys(item.categories).map((category) => (
                  <Flex flexDir='column' gap='8' key={category} w='full'>
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
                          gap='2'
                          justify='space-between'
                          key={element.name}
                        >
                          <Flex flexDir='column'>
                            <Text>{element.name}</Text>
                            <Text fontSize='xs'>{element.description}</Text>
                          </Flex>
                          <Divider flex='1' />
                          <Text>{formatPrice(element.price)}</Text>
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
