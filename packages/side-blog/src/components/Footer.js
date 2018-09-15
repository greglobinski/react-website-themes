import React from 'react';

import style from '../styles/footer';
import BaseFooter from '@react-website-themes/base/components/Footer';

const Footer = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseFooter themeStyle={themeStyle} {...rest} />;
};

export default Footer;
