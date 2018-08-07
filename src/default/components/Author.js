import React from 'react';
import PropTypes from 'prop-types';

const Author = props => {
  const { html, themeStyle } = props;

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
