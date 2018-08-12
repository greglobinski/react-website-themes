import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/author';

const Author = props => {
  const { html, themeStyle = style } = props;

  return (
    <div className={`${themeStyle}`}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Author.propTypes = {
  html: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default Author;
