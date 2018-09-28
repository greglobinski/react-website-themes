import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/article';

const Article = props => {
  const { children, themeStyle = style, customStyle = '' } = props;

  return <article className={cx(themeStyle, customStyle)}>{children}</article>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Article;
