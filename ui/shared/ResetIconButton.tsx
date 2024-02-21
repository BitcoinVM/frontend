import { Tooltip, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

type Props = {
  onClick: () => void;
}

const ResetIconButton = ({ onClick }: Props) => {
  const resetTokenIconColor = useColorModeValue('green.600', 'green.300');
  const resetTokenIconHoverColor = useColorModeValue('green.400', 'green.200');

  return (
    <Tooltip label="Reset filter">
      <Flex>
        <IconSvg
          name="cross"
          boxSize={ 5 }
          ml={ 1 }
          color={ resetTokenIconColor }
          cursor="pointer"
          _hover={{ color: resetTokenIconHoverColor }}
          onClick={ onClick }
        />
      </Flex>
    </Tooltip>
  );
};

export default ResetIconButton;
