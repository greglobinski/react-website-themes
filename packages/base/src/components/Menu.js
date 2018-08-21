import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

const Menu = props => {
  const { items, themeStyle = '', customStyle = '' } = props;

  return (
    <nav className={cx(themeStyle, customStyle)}>
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
  customStyle: PropTypes.string,
};

export default Menu;
