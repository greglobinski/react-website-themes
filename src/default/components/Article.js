import React from 'react';
import PropTypes from 'prop-types';

const Article = props => {
  const { children, themeStyle } = props;

  return <article className={`${themeStyle}`}>{children}</article>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string
};

export default Article;
