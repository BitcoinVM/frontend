import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
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

const Accordion = defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: 'outline',
  },
});

export default Accordion;
