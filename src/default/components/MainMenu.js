import PropTypes from 'prop-types';
import React from 'react';

import themed from '../../utils/themed';

import MainMenuItem from './MainMenuItem';
import mainMenuItem from '../styles/mainMenuItem';

const MainMenuItemThemed = themed({ themeStyle: mainMenuItem })(MainMenuItem);

const MainMenu = props => {
  const { items, themeStyle } = props;

  return (
    <nav className={`${themeStyle}`}>
      <ul>
        {items.map(item => {
          const { label, to, icon } = item;
          return (
            <MainMenuItemThemed key={label} label={label} to={to} icon={icon} />
          );
        })}
      </ul>
    </nav>
  );
};

MainMenu.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
};

export default MainMenu;
