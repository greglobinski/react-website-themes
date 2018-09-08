import React from 'react';

import style from '../styles/author';
import BaseAuthor from '@react-website-themes/base/components/Author';

const Author = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseAuthor themeStyle={themeStyle} {...rest} />;
};

export default Author;
