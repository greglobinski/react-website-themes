import React from 'react';

import style from '../styles/layout';
import BaseLayout from '@react-website-themes/base/components/Layout';

const Layout = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseLayout themeStyle={themeStyle} {...rest} />;
};

export default Layout;
