import { useColorModeValue } from '@chakra-ui/react';

export default function useColors() {
  return {
    text: {
      'default': useColorModeValue('gray.600', 'gray.400'),
      active: useColorModeValue('blackAlpha.900', 'whiteAlpha.900'),
      hover: useColorModeValue('green.600', 'link_hovered'),
    },
    iconPlaceholder: {
      'default': useColorModeValue('blackAlpha.100', 'whiteAlpha.300'),
    },
    bg: {
      'default': 'transparent',
      active: useColorModeValue('green.50', 'gray.800'),
    },
    border: {
      'default': 'divider',
      active: useColorModeValue('green.50', 'gray.800'),
    },
  };
}
