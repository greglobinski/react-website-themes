import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/article';

const Article = props => {
  const { children, themeStyle = style } = props;

  return <article className={`${themeStyle}`}>{children}</article>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
};

export default Article;
