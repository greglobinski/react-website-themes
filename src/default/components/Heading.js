import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  const { title, children, themeStyle } = props;

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
