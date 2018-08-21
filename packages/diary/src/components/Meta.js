import React from 'react';

import style from '../styles/meta';
import BaseMeta from '@react-website-themes/base/components/Meta';

const Meta = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseMeta themeStyle={themeStyle} {...rest} />;
};

export default Meta;
