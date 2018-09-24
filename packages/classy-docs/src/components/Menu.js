import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/menu';

const Menu = props => {
  const { items, themeStyle = style, customStyle = '' } = props;

  return (
    <nav className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const { label, to, icon: Icon, external, linkProps } = item;

          return (
            <li key={label}>
              {external ? (
                <a href={to} target="_blank" {...linkProps}>
                  {Icon && <Icon />}
                  <span>{label}</span>
                </a>
              ) : (
                <Link to={to} activeClassName="active" {...linkProps}>
                  {Icon && <Icon />}
                  <span>{label}</span>
                </Link>
              )}
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
