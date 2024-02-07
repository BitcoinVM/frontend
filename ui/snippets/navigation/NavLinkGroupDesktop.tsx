import {
  Text,
  HStack,
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import type { NavGroupItem } from 'types/client/navigation-items';

import NavLink from './NavLink';
import NavLinkIcon from './NavLinkIcon';
import useNavLinkStyleProps from './useNavLinkStyleProps';

type Props = {
  item: NavGroupItem;
  isCollapsed?: boolean;
}

const NavLinkGroupDesktop = ({ item, isCollapsed }: Props) => {
  const isExpanded = isCollapsed === false;

  const styleProps = useNavLinkStyleProps({ isCollapsed, isExpanded, isActive: item.isActive });

  return (
    <Accordion defaultIndex={ [ 0 ] } allowMultiple w="100%">
      <AccordionItem>
        <h2>
          <AccordionButton ml="-15px">
            <Link
              { ...styleProps.itemProps }
              w={{ lg: isExpanded ? '180px' : '60px', xl: isCollapsed ? '60px' : '180px' }}
              pl={{ lg: isExpanded ? 3 : '15px', xl: isCollapsed ? '15px' : 3 }}
              pr={{ lg: isExpanded ? 3 : '15px', xl: isCollapsed ? '15px' : 3 }}
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
                <AccordionIcon/>
              </HStack>
            </Link>
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <VStack spacing={ 3 } alignItems="start">
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
              <NavLink key={ subItem.text } item={ subItem } isCollapsed={ isCollapsed }/>,
            ) }
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default NavLinkGroupDesktop;
