import React from 'react';

import style from '../styles/menu';
import BaseMenu from '@react-website-themes/base/components/Menu';

const Menu = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseMenu themeStyle={themeStyle} {...rest} />;
};

export default Menu;
