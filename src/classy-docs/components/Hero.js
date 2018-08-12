import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/hero';

const Hero = props => {
  const { html, children, themeStyle = style } = props;

  return (
    <React.Fragment>
      {html ? (
        <section
          className={`${themeStyle}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <section className={`${themeStyle}`}>{children}</section>
      )}
    </React.Fragment>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  html: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default Hero;
