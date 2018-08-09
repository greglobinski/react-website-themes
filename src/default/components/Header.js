import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/header';

const Header = props => {
  const { children, themeStyle = style } = props;

  return <header className={`${themeStyle}`}>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
};

export default Header;
