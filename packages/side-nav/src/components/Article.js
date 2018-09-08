import React from 'react';

import style from '../styles/article';
import BaseArticle from '@react-website-themes/base/components/Article';

const Article = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseArticle themeStyle={themeStyle} {...rest} />;
};

export default Article;
