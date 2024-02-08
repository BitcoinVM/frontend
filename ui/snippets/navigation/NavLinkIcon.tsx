import React from 'react';

import type { NavItem, NavGroupItem } from 'types/client/navigation-items';

import IconSvg from 'ui/shared/IconSvg';

const NavLinkIcon = ({ item, onChange }: { item: NavItem | NavGroupItem; onChange?: () => void }) => {
  const handleChange = React.useCallback(() => {
    if (typeof onChange === 'function') {
      onChange();
    }
  }, [ onChange ]);
  if ('icon' in item && item.icon) {
    return <IconSvg name={ item.icon } boxSize="30px" flexShrink={ 0 } onClick={ handleChange }/>;
  }
  if ('iconComponent' in item && item.iconComponent) {
    const IconComponent = item.iconComponent;
    return <IconComponent size={ 30 }/>;
  }

  return null;
};

export default NavLinkIcon;
