import React from 'react';

import style from '../styles/share';
import BaseShare from '@react-website-themes/base/components/Share';

const Share = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseShare themeStyle={themeStyle} {...rest} />;
};

export default Share;
