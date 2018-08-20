import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/author';

const Author = props => {
  const { html, themeStyle = style, customStyle = '' } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Author.propTypes = {
  html: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Author;
