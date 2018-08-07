import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { children, themeStyle } = props;

  return <header className={`${themeStyle}`}>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
};

export default Header;
