import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import {
  Text,
  HStack,
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import React from 'react';

import type { NavGroupItem } from 'types/client/navigation-items';

import NavLink from './NavLink';
import NavLinkIcon from './NavLinkIcon';
import useNavLinkStyleProps from './useNavLinkStyleProps';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const outline = definePartsStyle(() => {
  return {
    container: {
      border: 'none',
    },
  };
});

const variants = {
  outline,
};

export const accordionTheme = defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: 'outline',
  },
});

const theme = extendTheme({
  components: {
    Accordion: accordionTheme,
  },
});

type Props = {
  item: NavGroupItem;
  isCollapsed?: boolean;
}

const NavLinkGroupDesktop = ({ item, isCollapsed }: Props) => {
  const isExpanded = isCollapsed === false;

  const styleProps = useNavLinkStyleProps({ isCollapsed, isExpanded, isActive: item.isActive });

  return (
    <Box as="li" listStyleType="none" w="100%">
      <ChakraProvider theme={ theme }>
        <Accordion defaultIndex={ [ 0 ] } allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Link
                  { ...styleProps.itemProps }
                  w={{ lg: isExpanded ? '180px' : '60px', xl: isCollapsed ? '60px' : '180px' }}
                  pl="0px"
                  pr={{ lg: isExpanded ? 0 : '15px', xl: isCollapsed ? '15px' : 0 }}
                  aria-label={ `${ item.text } link group` }
                  position="relative"
                >
                  <HStack spacing={ 3 } overflow="hidden">
                    <NavLinkIcon item={ item }/>
                    <Text
                      { ...styleProps.textProps }
                    >
                      { item.text }
                    </Text>
                  </HStack>
                </Link>
                <AccordionIcon/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={ 4 }>
              <Text variant="secondary" fontSize="sm" mb={ 2 } display={{ lg: isExpanded ? 'none' : 'block', xl: isCollapsed ? 'block' : 'none' }}>
                { item.text }
              </Text>
              <VStack spacing={ 1 } alignItems="start">
                { item.subItems.map((subItem, index) => Array.isArray(subItem) ? (
                  <Box
                    key={ index }
                    w="100%"
                    as="ul"
                    _notLast={{
                      mb: 2,
                      pb: 2,
                      borderBottomWidth: '1px',
                      borderColor: 'divider',
                    }}
                  >
                    { subItem.map(subSubItem => <NavLink key={ subSubItem.text } item={ subSubItem } isCollapsed={ false }/>) }
                  </Box>
                ) :
                  <NavLink key={ subItem.text } item={ subItem } isCollapsed={ false }/>,
                ) }
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ChakraProvider>
    </Box>
  );
};

export default NavLinkGroupDesktop;
