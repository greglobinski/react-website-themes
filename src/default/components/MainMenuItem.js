import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MainMenuItem = props => {
  const { label, to, icon: Icon, themeStyle } = props;

  return (
    <li className={`${themeStyle}`}>
      <Link to={to}>
        {Icon && <Icon />}
        {label}
      </Link>
    </li>
  );
};

MainMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  themeStyle: PropTypes.string,
};

export default MainMenuItem;
