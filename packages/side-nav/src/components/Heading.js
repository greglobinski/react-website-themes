import React from 'react';

import style from '../styles/heading';
import BaseHeading from '@react-website-themes/base/components/Heading';

const Heading = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseHeading themeStyle={themeStyle} {...rest} />;
};

export default Heading;
