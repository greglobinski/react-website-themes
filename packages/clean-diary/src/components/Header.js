import React from 'react';

import style from '../styles/header';
import BaseHeader from '@react-website-themes/base/components/Header';

const Header = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseHeader themeStyle={themeStyle} {...rest} />;
};

export default Header;
