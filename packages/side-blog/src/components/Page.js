import React from 'react';

import style from '../styles/page';
import BasePage from '@react-website-themes/base/components/Page';

const Page = props => {
  const { themeStyle = style, ...rest } = props;

  return <BasePage themeStyle={themeStyle} {...rest} />;
};

export default Page;
