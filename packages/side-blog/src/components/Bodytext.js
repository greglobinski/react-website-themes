import React from 'react';

import style from '../styles/bodytext';
import BaseBodytext from '@react-website-themes/base/components/Bodytext';

const Bodytext = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseBodytext themeStyle={themeStyle} {...rest} />;
};

export default Bodytext;
