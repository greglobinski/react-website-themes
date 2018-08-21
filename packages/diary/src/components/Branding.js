import React from 'react';

import style from '../styles/branding';
import BaseBranding from '@react-website-themes/base/components/Branding';

const Branding = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseBranding themeStyle={themeStyle} {...rest} />;
};

export default Branding;
