import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import style from '../styles/menu';

const Menu = props => {
  const { items, themeStyle = style } = props;

  return (
    <nav className={`${themeStyle}`}>
      <ul>
        {items.map(item => {
          const { label, to, icon: Icon, linkProps } = item;

          return (
            <li key={label}>
              <Link to={to} activeClassName="active" {...linkProps}>
                {Icon && <Icon />}
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
};

export default Menu;
