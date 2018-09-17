import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/heading';

const Heading = props => {
  const {
    title,
    children,
    themeStyle = style,
    customStyle = '',
    home = false,
  } = props;

  return (
    <header className={`${cx(themeStyle, customStyle)} ${home ? 'home' : ''}`}>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  home: PropTypes.bool,
};

export default Heading;
