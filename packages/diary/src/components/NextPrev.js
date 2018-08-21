import React from 'react';

import style from '../styles/nextPrev';
import BaseNextPrev from '@react-website-themes/base/components/NextPrev';

const NextPrev = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseNextPrev themeStyle={themeStyle} {...rest} />;
};

export default NextPrev;
