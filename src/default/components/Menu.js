import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Menu = props => {
  const { items, themeStyle } = props;

  return (
    <nav className={`${themeStyle}`}>
      <ul>
        {items.map(item => {
          const { label, to, icon: Icon } = item;

          return (
            <li key={label}>
              <Link to={to}>
                {Icon && <Icon />}
                {label}
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
