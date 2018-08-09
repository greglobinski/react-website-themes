import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/heading';

const Heading = props => {
  const { title, children, themeStyle = style } = props;

  return (
    <header className={`${themeStyle}`}>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
};

export default Heading;
