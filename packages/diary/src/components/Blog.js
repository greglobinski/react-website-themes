import React from 'react';

import style from '../styles/blog';
import BaseBlog from '@react-website-themes/base/components/Blog';

const Blog = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseBlog themeStyle={themeStyle} {...rest} />;
};

export default Blog;
